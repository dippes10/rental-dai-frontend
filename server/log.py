from flask import Flask, request, jsonify,flash
from flask_cors import CORS
import mysql.connector
import logging
app = Flask(__name__)
CORS(app)
logging.basicConfig(filename='app.log', level=logging.DEBUG, format='%(asctime)s %(levelname)s %(name)s %(threadName)s : %(message)s')

@app.route('/api/properties', methods=['GET'])
def get_properties():
    cursor = connection.cursor(dictionary=True)  # Use dictionary cursor for easier JSON conversion
    
    try:
        cursor.execute("SELECT * FROM properties")  # Fetch all properties
        properties = cursor.fetchall()  # Retrieve all rows
        
        cursor.close()
        return jsonify({'properties': properties})
    except Exception as e:
        cursor.close()
        print("Failed to fetch properties:", str(e))
        return jsonify({'error': 'Failed to fetch properties'}), 500  # Return internal server error

connection = mysql.connector.connect(
    host='localhost',
    database='signup',
    user='root',
    password=''
)

if connection.is_connected():
    print('Connected to MySQL database')

@app.route('/signup', methods=['POST'])
def signup():
    if request.method == 'POST':
        try:
            data = request.json
            
            # Retrieve form fields from the data
            firstName = data.get('firstName')
            lastName = data.get('lastName')
            email = data.get('email')
            password = data.get('password')
            confirmPassword = data.get('confirmPassword')

            # Validate data
            if not email or not password:
                return jsonify({'message': 'Email and password are required.'}), 400
            if len(password) < 8:
                return jsonify({'message': 'Password must be at least 8 characters long.'}), 400
            if password != confirmPassword:
                return jsonify({'message': 'Passwords do not match.'}), 400

            # Insert data into the database
            cursor = connection.cursor()
            insert_query = "INSERT INTO users (firstName, lastName, email, password) VALUES (%s, %s, %s, %s)"
            user_data = (firstName, lastName, email, password)
            cursor.execute(insert_query, user_data)
            connection.commit()
            cursor.close()

            return jsonify({'message': 'User signed up successfully'}), 200

        except Exception as e:
            print('Error during signup:', str(e))
            return jsonify({'message': 'Error during signup'}), 500

    return jsonify({'message': 'Method not allowed'}), 405
#lister ko signup

@app.route('/listerSignup', methods=['POST'])
def listerSignup():
    if request.method == 'POST':
        try:
            data = request.json
            
            # Retrieve form fields from the data
            firstName = data.get('firstName')
            lastName = data.get('lastName')
            email = data.get('email')
            password = data.get('password')
            confirmPassword = data.get('confirmPassword')

            # Validate data
            if not email or not password:
                return jsonify({'message': 'Email and password are required.'}), 400
            if len(password) < 8:
                return jsonify({'message': 'Password must be at least 8 characters long.'}), 400
            if password != confirmPassword:
                return jsonify({'message': 'Passwords do not match.'}), 400

            # Insert data into the database
            cursor = connection.cursor()
            insert_query = "INSERT INTO lister (firstName, lastName, email, password) VALUES (%s, %s, %s, %s)"
            user_data = (firstName, lastName, email, password)
            cursor.execute(insert_query, user_data)
            connection.commit()
            cursor.close()

            return jsonify({'message': 'User signed up successfully'}), 200

        except Exception as e:
            print('Error during signup:', str(e))
            return jsonify({'message': 'Error during signup'}), 500

    return jsonify({'message': 'Method not allowed'}), 405
#login ko lagi
@app.route('/signin', methods=['POST'])
def signin():
    if request.method=="POST":
     try:
         data = request.json
         email = data.get('email')
         password = data.get('password')

         cursor = connection.cursor()

         # Query to retrieve user with provided email and password
         query = "SELECT * FROM lister WHERE email = %s AND password = %s"
         cursor.execute(query, (email, password))
         user = cursor.fetchone()
         cursor.close()

         if user:
                return jsonify({'message': 'Sign-in successful as lister'}), 200
         else:
                return jsonify({'message': 'Invalid credentials'}), 401
     except Exception as e:
            logging.error('Error during signin:', exc_info=True)  # Log the error with traceback
            return jsonify({'message': 'Error during signin'}), 500
     
    return jsonify({'message': 'Method not allowed'}), 405
#userlogin
@app.route('/user-Signin', methods=['POST'])
def usersignin():
    if request.method=="POST":
     try:
         data = request.json
         email = data.get('email')
         password = data.get('password')

         cursor = connection.cursor()

         # Query to retrieve user with provided email and password
         query = "SELECT * FROM users WHERE email = %s AND password = %s"
         cursor.execute(query, (email, password))
         user = cursor.fetchone()
         cursor.close()

         if user:
                return jsonify({'message': 'Sign-in successful as user'}), 200
         else:
                return jsonify({'message': 'Invalid credentials'}), 401
     except Exception as e:
            logging.error('Error during signin:', exc_info=True)  # Log the error with traceback
            return jsonify({'message': 'Error during signin'}), 500
     
    return jsonify({'message': 'Method not allowed'}), 405



#listing properties
from cloudinary.uploader import upload
import os
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = 'static/uploads/'
app.secret_key = "cairocoders-ednalan"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
@app.route('/api/properties', methods=['POST'])
def add_property():
   if 'files[]' not in request.files:
        flash('No file part')
        return jsonify({'message': 'No file part'}), 400

    # Retrieve property details from the request JSON
   data = request.form
   name = data.get('name')
   address = data.get('address')
   details = data.get('details')
   latitude = data.get('latitude')
   longitude = data.get('longitude')
   agreed_to_terms = data.get('agreedToTerms')

   files = request.files.getlist('files[]')
   image_paths = []
   for file in files:
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            image_paths.append(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        else:
            flash('Allowed image types are -> png, jpg, jpeg, gif')
            return jsonify({'message': 'Allowed image types are -> png, jpg, jpeg, gif'}), 400

    # Insert property data into the properties table along with image paths
   cursor = connection.cursor()
   insert_query = "INSERT INTO propertieslist (name, address, images, details, latitude, longitude, agreedToTerms) VALUES (%s, %s, %s, %s, %s, %s, %s)"
   property_data = (name, address, ','.join(image_paths), details, latitude, longitude, agreed_to_terms)
   cursor.execute(insert_query, property_data)
   connection.commit()
   cursor.close()

   return jsonify({'message': 'Property added successfully'}), 200
if __name__ == '__main__':
    app.run(port=8080, debug=True)

   