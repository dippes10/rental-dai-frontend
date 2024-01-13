// pages/PropertiesPage.tsx
import React, { useState, useEffect } from "react";
import AppLayout from "../../components/AppLayout";
import MapboxComponent from "../../components/mapbox/mapbox"; // Assuming you have this Mapbox component
import {
  FaBed,
  FaBath,
  FaDollarSign,
  FaMapMarkedAlt,
  FaShare,
} from "react-icons/fa";

// export const fakeProperties = [
//   {
//     id: 1,
//     name: "Property 1",
//     address: "123 Fake Street",
//     imageUrl: "https://source.unsplash.com/800x600/?flat",
//     location: {
//       latitude: 27.6957153,
//       longitude: 85.3016536,
//     },
//     bedrooms: 3,
//     bathrooms: 2,
//     price: "$500,000",
//     description: "Spacious property with a beautiful view.",
//   },
//   {
//     id: 2,
//     name: "Property 2",
//     address: "123 Fake Street",
//     imageUrl: "https://source.unsplash.com/800x600/?room",
//     location: {
//       latitude: 27.6957453,
//       longitude: 85.3136646,
//     },
//     bedrooms: 2,
//     bathrooms: 1,
//     price: "$300,000",
//     description: "Cozy property with modern amenities.",
//   },
//   {
//     id: 2,
//     name: "Property 2",
//     address: "123 Fake Street",
//     imageUrl: "https://source.unsplash.com/800x600/?room",
//     location: {
//       latitude: 27.6957453,
//       longitude: 85.3136646,
//     },
//     bedrooms: 2,
//     bathrooms: 1,
//     price: "$300,000",
//     description: "Cozy property with modern amenities.",
//   },
// ];

const PropertiesPage: React.FC = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<any[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<any | null>(null);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mapVisible, setMapVisible] = useState(false);

  useEffect(() => {
    // // To use fake data uncomment below commented code
    // setProperties(fakeProperties);
    // setFilteredProperties(fakeProperties);
    // setIsLoading(false);
    // Uncomment the following code when using actual API

    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => {
        if (data.properties) {
          setProperties(data.properties);
          setFilteredProperties(data.properties);
        }
      })
      .catch((error) => console.error("Error fetching properties:", error))
      .finally(() => setIsLoading(false));
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

  const handleViewMap = (property: any) => {
    setSelectedProperty(property);
    setIsMapModalOpen(true);
  };

  const handleCloseMapModal = () => {
    setIsMapModalOpen(false);
    setSelectedProperty(null);
  };

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close the map if clicking outside the map
    if (e.target === e.currentTarget) {
      hideMap();
    }
  };

  const hideMap = () => {
    setIsMapModalOpen(false);
    setSelectedProperty(null);
  };


  return (
    <AppLayout>
      <div className="bg-properties flex justify-center items-center">
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
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
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
                      {property.image &&
                        property.image
                          .split(",")
                          .map((imagePath: string, index: number) => (
                            <img
                              key={index}
                              src={"http://localhost:8080/" + imagePath.trim()}
                              alt={`Image ${index}`}
                              width={0}
                              height={0}
                              className="w-full h-52 object-cover rounded-md mb-4"
                            />
                          ))}

                      {/* Property Details */}
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">
                          {property.name}
                        </h3>
                        <p className="text-gray-700">
                          <FaMapMarkedAlt className="inline mr-2" />
                          {property.address}
                        </p>
                        <p className="text-gray-700">
                          <FaBed className="inline mr-2" /> Bedrooms:{" "}
                          {property.bedrooms},{" "}
                          <FaBath className="inline mr-2" /> Bathrooms:{" "}
                          {property.bathrooms}
                        </p>
                        <p className="text-gray-700">
                          <FaDollarSign className="inline mr-2" /> Price:{" "}
                          {property.price}
                        </p>
                      </div>

                      {/* Share Button */}
                      <button
                        className="flex mt-4 items-center bg-white text-red-500 px-3 py-1 rounded-md hover:bg-red-100 transition-all"
                        onClick={() => console.log("Share button clicked")}
                      >
                        <FaShare className="inline mr-2" /> Share
                      </button>

                      {/* View Map Button */}
                      <button
                        className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700 focus:outline-none"
                        onClick={() => handleViewMap(property)}
                      >
                        View Map
                      </button>
                    </div>
                    {/* End Property Card */}
                  </div>
                ))
              ) : (
                <p>No properties found.</p>
              )}
            </div>
          )}

          {/* Map Modal */}
          {isMapModalOpen && selectedProperty && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center mb-1"
              onClick={handleMapClick} >
              <div className="bg-white p-8 rounded-lg mt-32 w-full sm:w-3/4 md:w-1/2 lg:w-2/3 xl:w-1/2">
               {/* Mapbox Component */}

                <MapboxComponent
                  disableMove={false}
                  showNavigationControl={true}
                  showMarker={true}
                  latitude={selectedProperty.latitude}
                  longitude={selectedProperty.longitude}
                  zoom={13}
                  height="400px"
                  properties={[selectedProperty]}
                  showAllProperties={true}
                />

                {/* Additional Property Details */}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {selectedProperty.name}
                  </h3>
                  <p className="text-gray-700">{selectedProperty.address}</p>
                  <p className="text-gray-700">
                    Bedrooms: {selectedProperty.bedrooms}, Bathrooms:{" "}
                    {selectedProperty.bathrooms}
                  </p>
                  <p className="text-gray-700">
                    Price: {selectedProperty.price}
                  </p>
                  <p className="text-gray-700">
                    Description: {selectedProperty.description}
                  </p>
                </div>

                {/* Close Button */}
                <button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
                  onClick={handleCloseMapModal}
                >
                  Close Map
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default PropertiesPage;
