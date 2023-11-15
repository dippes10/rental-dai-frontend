// pages/PropertiesPage.tsx
import React, { useState, useEffect } from "react";
import PropertyDetailsModal from "../components/PropertyDetailsModal";

const properties = [
  {
    id: 1,
    name: "Elegant Studio",
    address: "123 Maple Avenue, Townsville",
    imageUrl: "https://source.unsplash.com/800x600/?apartment",
    details: "This elegant studio offers a comfortable living space with modern amenities.",
  },
  {
    id: 2,
    name: "Spacious Penthouse",
    address: "456 Pine Street, Cityville",
    imageUrl: "https://source.unsplash.com/800x600/?penthouse",
    details: "Experience luxury living in this spacious penthouse with panoramic city views."
  },
  {
    id: 3,
    name: "Charming Cottage",
    address: "789 Oak Road, Villagetown",
    imageUrl: "https://source.unsplash.com/800x600/?cottage",
    details: "Escape to the countryside in this charming cottage surrounded by nature."
  },
  // Add more properties as needed
];

const PropertiesPage: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState<any[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call to fetch properties
    setTimeout(() => {
      setFilteredProperties(properties);
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleFilter = (filterTerm: string) => {
    const filtered = properties.filter((property) =>
      property.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  const handleSort = () => {
    const sorted = [...filteredProperties].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredProperties(sorted);
  };

  const handleViewDetails = (property: any) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="container mx-auto mt-8">
      {/* Filter and Sort Controls */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Filter by name"
          onChange={(e) => handleFilter(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
        />
        <button
          onClick={handleSort}
          className="ml-4 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none"
        >
          Sort by Name
        </button>
      </div>

      {/* Property Cards with Skeleton Loading */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="relative animate-pulse">
              <div className="bg-purple-200 w-full h-60 rounded-md mb-4"></div>
              <div className="bg-purple-200 h-4 w-2/3 rounded mb-2"></div>
              <div className="bg-purple-200 h-4 w-1/2 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div key={property.id} className="relative">
              {/* Property Card */}
              <div className="bg-purple-200 p-4 rounded-lg shadow-md transition-all hover:shadow-lg">
                {/* Property Image */}
                {/*  */}

                {/* Property Name */}
                <h3 className="text-xl font-semibold mb-2">{property.name}</h3>

                {/* Property Address */}
                <p className="text-gray-700 mb-4">{property.address}</p>

                {/* Share Button */}
                <button
                  className="flex items-center bg-white text-purple-500 px-3 py-1 rounded-md hover:bg-purple-100 transition-all"
                  onClick={() => console.log("Share button clicked")} // Replace with your share logic
                >
                  Share
                </button>
              </div>
              {/* End Property Card */}

              {/* View Details Button */}
              <button
                className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-md hover:bg-purple-700 focus:outline-none"
                onClick={() => handleViewDetails(property)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Property Details Modal */}
      {selectedProperty && (
        <PropertyDetailsModal
          property={selectedProperty}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default PropertiesPage;
