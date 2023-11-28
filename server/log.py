from flask import Flask, request, jsonify
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
#add properties
@app.route('/add_property', methods=['POST'])
def add_property():
    data = request.get_json()  
    
    # Print received data to check if it's received properly
    print("Received data:", data)
    
    name = data.get('name')
    address = data.get('address')
    image_urls = data.get('imageUrls')
    details = data.get('details')
    
    cursor = connection.cursor()
    try:
        # Perform INSERT operation into the properties table with static values
        cursor.execute("INSERT INTO properties (name, address, image_urls, details) VALUES (%s, %s, %s, %s)",
                       (name, address, image_urls, details))  # Use static values for testing
        connection.commit()
        cursor.close()
        return jsonify({'message': 'Property added successfully'})
    except Exception as e:
        connection.rollback()
        cursor.close()
        print("Failed to add property:", str(e))  # Print error for debugging
        return jsonify({'error': 'Failed to add property', 'details': str(e)}), 500  # HTTP status code 500 for internal server error
#edit ko lagi
@app.route('/edit_property/<property_id>', methods=['PUT'])
def edit_property(property_id):
    data = request.get_json()

    name = data.get('name')
    address = data.get('address')
    image_urls = data.get('imageUrls')
    details = data.get('details')

    cursor = connection.cursor()
    try:
        # Perform UPDATE operation on the specified property_id
        cursor.execute("UPDATE properties SET name = %s, address = %s, image_urls = %s, details = %s WHERE id = %s",
                       (name, address, image_urls, details, property_id))
        connection.commit()
        cursor.close()
        return jsonify({'message': f'Property with ID {property_id} updated successfully'})
    except Exception as e:
        connection.rollback()
        cursor.close()
        logging.error("Failed to edit property: %s", str(e))
        return jsonify({'error': 'Failed to edit property', 'details': str(e)}), 500  # HTTP status code 500 for internal server error

#delete ko lagi
@app.route('/delete_property/<int:property_id>', methods=['DELETE'])
def delete_property(property_id):
    cursor = connection.cursor()
    try:
        # Perform DELETE operation on the specified property_id
        cursor.execute("DELETE FROM properties WHERE id = %s", (property_id,))
        connection.commit()
        cursor.close()
        return jsonify({'message': f'Property with ID {property_id} deleted successfully'})
    except Exception as e:
        connection.rollback()
        cursor.close()
        logging.error("Failed to delete property: %s", str(e))
        return jsonify({'error': 'Failed to delete property', 'details': str(e)}), 500  # HTTP status code 500 for internal server error


    
if __name__ == '__main__':
    app.run(port=8080, debug=True)

   