from flask import Flask, request, jsonify,flash, url_for,send_from_directory
from flask_cors import CORS
import mysql.connector
import logging
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import math

app = Flask(__name__, static_url_path='/static',static_folder='static')

CORS(app)
logging.basicConfig(filename='app.log', level=logging.DEBUG, format='%(asctime)s %(levelname)s %(name)s %(threadName)s : %(message)s')
app.config['JWT_SECRET_KEY'] = 'thisissecret'  # Replace with a complex secret key
jwt = JWTManager(app)

@app.route('/api/properties', methods=['GET'])
def get_properties():
    cursor = connection.cursor(dictionary=True)  # Use dictionary cursor for easier JSON conversion
    
    try:
        cursor.execute("SELECT * FROM propertieslist")  # Fetch all properties
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
            user_type = data.get("user_type")
            phone = data.get("phone")

            # Validate data
            if not email or not password:
                return jsonify({'message': 'Email and password are required.'}), 400
            if len(password) < 8:
                return jsonify({'message': 'Password must be at least 8 characters long.'}), 400
            if password != confirmPassword:
                return jsonify({'message': 'Passwords do not match.'}), 400

            # Insert data into the database
            cursor = connection.cursor()
            insert_query = "INSERT INTO users (firstName, lastName, email, password,user_type,phone) VALUES (%s, %s, %s, %s,%s,%s)"
            user_data = (firstName, lastName, email, password,user_type,phone)
            cursor.execute(insert_query, user_data)
            connection.commit()
            cursor.close()

            return jsonify({'message': 'User signed up successfully'}), 200

        except Exception as e:
            print('Error during signup:', str(e))
            return jsonify({'message': 'Error during signup'}), 500

    return jsonify({'message': 'Method not allowed'}), 405


#userlogin
@app.route('/user-Signin', methods=['POST'])
def signin():
    if request.method == "POST":
        try:
            data = request.json
            email = data.get('email')
            password = data.get('password')

            cursor = connection.cursor()
            query = "SELECT id, user_type,email,phone FROM users WHERE email = %s AND password = %s"
            cursor.execute(query, (email, password))
            user_data = cursor.fetchone()
            cursor.close()

            if user_data:
                user_id = user_data[0]  # Access the first element (ID)
                user_type = user_data[1] 
                user_email=user_data[2] # Access the second element (user_type)
                user_phone = user_data[3]
                access_token = create_access_token(identity={"user_id":user_id,"email":user_email})
                return jsonify({'access_token': access_token, 'user':{"user_id":user_id,"email":user_email,"user_type":user_type,"phone":user_phone} }), 200
            else:
                return jsonify({'message': 'Invalid credentials'}), 401
        except Exception as e:
            logging.error(f'Error during signin: {e}', exc_info=True)
            return jsonify({'message': f'Error during signin: {e}'}), 500

    return jsonify({'message': 'Method not allowed'}), 405

@app.route('/properties', methods=['GET'])
@jwt_required()
def properties():
    current_user_id = get_jwt_identity()
    return jsonify(logged_in_user_id=current_user_id), 200


#listing properties
import os
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = r'C:\Users\PC\Desktop\rental-dai-frontend\server\static\uploads'
app.secret_key = "cairocoders-ednalan"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/api/properties', methods=['POST'])
@jwt_required()
def add_property():
   print("request.files", request.files)    
   print("request.form", request.form)  
   print("reques.files.keys()", request.files.keys())  
   if len(request.files) == 0:
        flash('No file provided')
        return jsonify({'message': 'No file part'}), 400

    # Retrieve property details from the request JSON
   data = request.form
   name = data.get('name')
   address = data.get('address')
   details = data.get('details')
   latitude = data.get('latitude')
   longitude = data.get('longitude')
   agreed_to_terms = data.get('agreedToTerms')
   current_user = get_jwt_identity()
   created_by=current_user["user_id"]

   files = request.files.values()
   print("files", files)
   image_paths = []
   for file in files:
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            relative_path = os.path.join('uploads', filename)
            image_paths.append(relative_path)
        else:
            flash('Allowed image types are -> png, jpg, jpeg, gif')
            return jsonify({'message': 'Allowed image types are -> png, jpg, jpeg, gif'}), 400

    # Insert property data into the properties table along with image paths
   cursor = connection.cursor()
   insert_query = "INSERT INTO propertieslist (name, address, image, details, latitude, longitude, agreedToTerms,created_by) VALUES (%s, %s, %s, %s, %s, %s, %s,%s)"
   property_data = (name, address, ','.join(image_paths), details, latitude, longitude, agreed_to_terms,created_by)
   cursor.execute(insert_query, property_data)
   connection.commit()
   cursor.close()
   return jsonify({'message': 'Property added successfully'}), 200

#edit property


@app.route('/api/properties/<property_id>', methods=['PUT'])
@jwt_required()
def update_property(property_id):
    # Retrieve existing property details from the database
    cursor = connection.cursor()
    select_query = "SELECT * FROM propertieslist WHERE id=%s"
    cursor.execute(select_query, (property_id,))
    existing_property = cursor.fetchone()

    if not existing_property:
        cursor.close()
        return jsonify({'message': 'Property not found'}), 404

    # Retrieve updated property details from the request JSON
    data = request.form

    # Use existing values as default
    updated_name = data.get('name', existing_property[1])
    updated_address = data.get('address', existing_property[2])
    updated_details = data.get('details', existing_property[4])
    updated_latitude = data.get('latitude', existing_property[5])
    updated_longitude = data.get('longitude', existing_property[6])
    updated_agreed_to_terms = data.get('agreedToTerms', existing_property[7])

    # Retrieve new images from the request
    new_images = request.files.getlist('images')

    # Concatenate existing images with new ones
    existing_images = existing_property[3].split(',') if existing_property[3] else []
    updated_images = existing_images.copy()  # Initialize with existing images
    for file in new_images:
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            updated_images.append(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        else:
            cursor.close()
            return jsonify({'message': 'Allowed image types are -> png, jpg, jpeg, gif'}), 400

    # Perform the update in the database
    update_query = "UPDATE propertieslist SET name=%s, address=%s, image=%s, details=%s, latitude=%s, longitude=%s, agreedToTerms=%s WHERE id=%s"
    cursor.execute(update_query, (updated_name, updated_address, ','.join(updated_images), updated_details, updated_latitude, updated_longitude, updated_agreed_to_terms, property_id))
    connection.commit()
    cursor.close()

    return jsonify({'message': 'Property updated successfully'}), 200

@app.route('/api/properties/<property_id>', methods=['DELETE'])
@jwt_required
def delete_property(property_id):
    # Check if the property exists in the database
    cursor = connection.cursor()
    select_query = "SELECT * FROM propertieslist WHERE id=%s"
    cursor.execute(select_query, (property_id,))
    existing_property = cursor.fetchone()

    if not existing_property:
        cursor.close()
        return jsonify({'message': 'Property not found'}), 404

    # Perform deletion from the database
    delete_query = "DELETE FROM propertieslist WHERE id=%s"
    cursor.execute(delete_query, (property_id,))
    connection.commit()
    cursor.close()

    return jsonify({'message': 'Property deleted successfully'}), 200


# Haversine formula to calculate distance between two points
def haversine(lat1, lon1, lat2, lon2):
    R = 6371  # Radius of the Earth in kilometers
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat / 2) ** 2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon / 2) ** 2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    distance = R * c
    return distance
@app.route('/recommend_properties', methods=['POST'])
def recommend_properties():
    # Get user's location data from request
    user_latitude = request.json.get('latitude')
    user_longitude = request.json.get('longitude')
    radius_in_km = 4 # Radius to search within (adjust as needed)

    # Execute Haversine query to find nearby properties

    cursor = connection.cursor()  
    query = "SELECT * FROM propertieslist;"
    cursor.execute(query)
    
    columns = [col[0] for col in cursor.description]
    

    # Convert fetched data into a list of dictionaries
    properties = [
        dict(zip(columns, row)) # Create dictionary for each row
        for row in cursor.fetchall()
    ]
    

    # Calculate distance for each property and add it to property details
    for prop in properties:
     prop['distance'] = haversine( float(user_latitude), float(user_longitude),float(prop['latitude']), float(prop['longitude']))

    # Filter properties within the radius and sort by distance
    nearby_properties = [
    {'property_details': prop, 'distance': prop['distance']}  # Structure the response
    for prop in properties
    if prop['distance'] <= radius_in_km
    ]
    nearby_properties.sort(key=lambda x: x['distance'])

    cursor.close()

    return jsonify(nearby_properties)


#listerko property details 
@app.route('/lister_properties', methods=['GET'])
@jwt_required()
def lister_properties():
    current_user_id = get_jwt_identity()
    user_id = current_user_id.get('user_id')  # Assuming 'user_id' is the key for the user ID in the dictionary


    # Fetch properties listed by the current user (based on created_by field)
    cursor = connection.cursor()  
    query = "SELECT * FROM propertieslist WHERE created_by = %s;"
    cursor.execute(query, (user_id,))
    
    columns = [col[0] for col in cursor.description]
    
    # Convert fetched data into a list of dictionaries
    properties = [
        dict(zip(columns, row))  # Create dictionary for each row
        for row in cursor.fetchall()
    ]

    cursor.close()

    return jsonify(properties)
@app.route('/user_details', methods=['GET'])
@jwt_required()
def user_details():
    current_user_id = get_jwt_identity()
    user_id = current_user_id.get('user_id')

    # Fetch user details based on user_id
    cursor = connection.cursor()
    query = "SELECT firstName,email, phone FROM users WHERE id = %s;"
    cursor.execute(query, (user_id,))

    user_details = cursor.fetchone()

    cursor.close()

    if user_details:
        columns = [col[0] for col in cursor.description]
        user_info = dict(zip(columns, user_details))
        return jsonify(user_info)
    else:
        return jsonify({'message': 'User details not found'}), 404


@app.route('/')
def index():
  image_url = url_for('static', filename='1.png')
  print("Generated URL:", image_url)
  return f'<img src="{image_url}" alt="Image">'

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(r'C:\Users\PC\Desktop\rental-dai-frontend\server\static\uploads', filename)

if __name__ == '__main__':
    app.run(port=8080, debug=True)