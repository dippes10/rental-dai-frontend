// components/PropertyMap.tsx

import React from "react";

interface PropertyMapProps {
  showNavigationControl: boolean;
  latitude: number;
  longitude: number;
  zoom: number;
  showAllProperties: boolean;
  properties: any[]; // Adjust the type based on your property data structure
  disableMove: boolean;
}

const PropertyMap: React.FC<PropertyMapProps> = ({
  showNavigationControl,
  latitude,
  longitude,
  zoom,
  showAllProperties,
  properties,
  disableMove,
}) => {
  return (
    <div className="h-[400px] rounded-lg shadow-md overflow-hidden">
      {/* Your PropertyMap content goes here */}
      <p>PropertyMap Component</p>
    </div>
  );
};

export default PropertyMap;
