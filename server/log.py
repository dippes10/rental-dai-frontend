from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
app = Flask(__name__)
CORS(app)
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
# Establishing a connection to
connection = mysql.connector.connect(
        host='localhost',  # Replace with your XAMPP MySQL host
        database='signup',  # Replace with your database name
        user='root',  # Replace with your MySQL username
        password=''  # Replace with your MySQL password
    )

if connection.is_connected():
        print('Connected to MySQL database')




@app.route('/signup', methods=['POST'])
def signup():
    if request.method == 'POST':
        print(request.form)
        data = request.json  # Assuming the data sent is JSON


        # Retrieve form fields from the data
        firstName = data.get('firstName')
        lastName = data.get('lastName')
        email = data.get('email')
        password = data.get('password')
        confirmPassword = data.get('confirmPassword')

       
        if not email or not password:
            return jsonify({'message': 'Email and password are required.'}), 400
        if len(password) < 8:
            return jsonify({'message': 'Password must be at least 8 characters long.'}), 400
        if password != confirmPassword:
            return jsonify({'message': 'Passwords do not match.'}), 400
        


        # Example: Return a response indicating successful signup
        return jsonify({'message': 'User signed up successfully'}), 200

    return jsonify({'message': 'Method not allowed'}), 405

if __name__ == '__main__':
    app.run(port=8080,debug=True)

   