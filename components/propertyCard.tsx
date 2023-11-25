// components/PropertyCard.tsx

import React from "react";

interface PropertyCardProps {
  property: any; // Adjust the type based on your property data structure
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Your PropertyCard content goes here */}
      <p>PropertyCard Component</p>
    </div>
  );
};

export default PropertyCard;
