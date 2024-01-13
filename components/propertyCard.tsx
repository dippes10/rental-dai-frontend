// components/PropertyCard.tsx

import React from 'react';
import { FaBed, FaBath, FaDollarSign, FaMapMarkedAlt, FaShare } from 'react-icons/fa';

interface PropertyCardProps {
  property: {
    id: number;
    details: string;
    name: string;
    address: string;
    images: string[]; // Array of image URLs
    bedrooms: number;
    bathrooms: number;
    price: string;
    description: string;
  };
  onViewMap: () => void; // Function to handle "View Map" button click
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewMap }) => {
  const { name, address, images, bedrooms, bathrooms, price, description } = property;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg mb-6 relative">
      <div className="p-4">
        {/* Property Details */}
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700 text-sm mb-1"><FaMapMarkedAlt className="inline mr-1" />{address}</p>
        <p className="text-gray-700 text-sm mb-1"><FaBed className="inline mr-1" /> {bedrooms} Beds, <FaBath className="inline mr-1" /> {bathrooms} Baths</p>
        <p className="text-gray-700 text-sm mb-1"><FaDollarSign className="inline mr-1" /> {price}</p>
        <p className="text-gray-600 text-sm">{description}</p>

        {/* Share and View Map Buttons */}
        <div className="flex justify-between items-center mt-4">
          <button
            className="flex items-center bg-white text-red-500 px-3 py-1 rounded-md hover:bg-red-100 transition-all"
            onClick={() => console.log("Share button clicked")}
          >
            <FaShare className="mr-2" /> Share
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700 focus:outline-none"
            onClick={onViewMap}
          >
            View Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
