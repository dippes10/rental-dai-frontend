// pages/PropertiesPage.tsx
import React, { useState, useEffect } from "react";
import PropertyDetailsModal from "../../components/PropertyDetailsModal";
import Image from "next/image";
import AppLayout from "../../components/AppLayout";

const fakeProperties = [
  {
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?home",
  },
  {
    name: "Property 2",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?cottage",
  },
  {
    name: "Property 3",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?building",
  },
  {
    name: "Property 4",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?villa",
  },
  {
    name: "Property 5",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?rooftop",
  },
  {
    name: "Property 6",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?hotel",
  },
];

const PropertiesPage: React.FC = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<any[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProperties(fakeProperties);
    setFilteredProperties(fakeProperties);
    setIsLoading(false);
    return;
    // fetch("http://localhost:8080/api/properties")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setProperties(data);
    //     setFilteredProperties(data);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => console.error("Error fetching properties:", error));
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
    <AppLayout>
      <div className="container mx-auto mt-8 px-4 lg:px-2">
        {/* Filter and Sort Controls */}
        <div className="flex flex-col lg:flex-row gap-2 mb-8">
          <input
            type="text"
            placeholder="Filter by name"
            onChange={(e) => handleFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
          />
          <button
            onClick={handleSort}
            className=" bg-red-500  text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
          >
            Sort by Name
          </button>
        </div>

        {/* Property Cards with Skeleton Loading */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="relative animate-pulse">
                <div className="bg-red-200 w-full h-60 rounded-md mb-4"></div>
                <div className="bg-red-200 h-4 w-2/3 rounded mb-2"></div>
                <div className="bg-red-200 h-4 w-1/2 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(filteredProperties) &&
            filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div key={property.id} className="relative">
                  {/* Property Card */}
                  <div className="bg-red-200 p-4 rounded-lg shadow-md transition-all hover:shadow-lg">
                    {/* Property Image */}
                    <img
                      src={property.imageUrl}
                      alt={`Property: ${property.name}`}
                      width={0}
                      height={0}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />

                    {/* Property Name */}
                    <h3 className="text-xl font-semibold mb-2">
                      {property.name}
                    </h3>

                    {/* Property Address */}
                    <p className="text-gray-700 mb-4">{property.address}</p>

                    {/* Share Button */}
                    <button
                      className="flex items-center bg-white text-red-500 px-3 py-1 rounded-md hover:bg-red-100 transition-all"
                      onClick={() => console.log("Share button clicked")} // Replace with your share logic
                    >
                      Share
                    </button>
                  </div>
                  {/* End Property Card */}

                  {/* View Details Button */}
                  <button
                    className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700 focus:outline-none"
                    onClick={() => handleViewDetails(property)}
                  >
                    View Offer
                  </button>
                </div>
              ))
            ) : (
              <p>No properties found.</p>
            )}
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
    </AppLayout>
  );
};

export default PropertiesPage;
