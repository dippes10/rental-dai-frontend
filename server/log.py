from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import logging
app = Flask(__name__)
CORS(app)
logging.basicConfig(filename='app.log', level=logging.DEBUG, format='%(asctime)s %(levelname)s %(name)s %(threadName)s : %(message)s')

# Example property data (replace this with your actual property data)
properties = [
    {
        "id": 1,
        "name": "Elegant Studio",
        "address": "123 Maple Avenue, Townsville",
        "imageUrl": "https://source.unsplash.com/800x600/?apartment",
        "details": "This elegant studio offers a comfortable living space with modern amenities."
    },
    
    {
        "id": 2,
        "name": "Spacious Penthouse",
        "address": "456 Pine Street, Cityville",
        "imageUrl": "https://source.unsplash.com/800x600/?penthouse",
        "details": "Experience luxury living in this spacious penthouse with panoramic city views."
    },
    
    {
        "id": 3,
        "name": "Charming Cottage",
        "address": "789 Oak Road, Villagetown",
        "imageUrl": "https://source.unsplash.com/800x600/?cottage",
        "details": "Escape to the countryside in this charming cottage surrounded by nature."
    }
    # Add more properties as needed
]
@app.route('/api/properties', methods=['GET'])
def get_properties():
    return jsonify(properties)

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
                return jsonify({'message': 'Sign-in successful'}), 200
         else:
                return jsonify({'message': 'Invalid credentials'}), 401
     except Exception as e:
            logging.error('Error during signin:', exc_info=True)  # Log the error with traceback
            return jsonify({'message': 'Error during signin'}), 500
     
    return jsonify({'message': 'Method not allowed'}), 405


    
if __name__ == '__main__':
    app.run(port=8080, debug=True)

   