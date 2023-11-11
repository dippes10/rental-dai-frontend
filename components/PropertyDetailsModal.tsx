/* eslint-disable @next/next/no-img-element */
// components/PropertyDetailsModal.tsx
import React from "react";
import { FaShare } from "react-icons/fa";

interface PropertyDetailsModalProps {
  property: {
    name: string;
    address: string;
    imageUrl: string;
    details: string;
  };
  onClose: () => void;
}

const PropertyDetailsModal: React.FC<PropertyDetailsModalProps> = ({ property, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">
      <div
        className="bg-black opacity-50 absolute inset-0 cursor-pointer transition-opacity"
        onClick={onClose}
      ></div>
      <div
        className="bg-white p-6 rounded-lg z-10 max-w-md w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl transition-transform"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          Close
        </button>
        <h2 className="text-3xl font-semibold mb-4">{property.name}</h2>
        <img
          src={property.imageUrl}
          alt={property.name}
          className="w-full h-64 object-cover mb-4 rounded-md"
        />
        <p className="text-gray-700 mb-4">{property.address}</p>
        <p className="text-gray-800">{property.details}</p>
        <div className="flex justify-end mt-4">
          <button
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={() => console.log("Share button clicked")} // Replace with your share logic
          >
            <FaShare className="mr-2" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsModal;
