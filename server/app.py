from flask import Flask, jsonify
from flask_cors import CORS

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

if __name__ == '__main__':
    app.run(port=8080,debug=True)
