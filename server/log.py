from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from .app import app
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

   