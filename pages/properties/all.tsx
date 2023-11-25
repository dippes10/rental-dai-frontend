// pages/PropertiesPage.tsx
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import PropertyDetailsModal from "../../components/PropertyDetailsModal";
import AppLayout from "../../components/AppLayout";
import MapboxComponent from "../../components/mapbox/mapbox";

export const fakeProperties = [
  
  {
    id: 1,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?flat",
    location: {
      latitude: 27.6957153, // Replace with actual latitude
      longitude: 85.3026536, // Replace with actual longitude
    },
  },
  {
    id: 2,
    name: "Property 2",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?room",
    location: {
      latitude: 27.6957453, // Replace with actual latitude
      longitude: 85.3136646, // Replace with actual longitude
    },
  },
  {
    id: 3,
    name: "Property 3",
    address: "123 Fake Street",
    imageUrl:
    "https://source.unsplash.com/800x600/?house ",
    location: {
      latitude: 27.6952053, // Replace with actual latitude
      longitude: 85.3256346, // Replace with actual longitude
    },
  },
  {
    id: 4,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?penthouse",
    location: {
      latitude: 27.6957653, // Replace with actual latitude
      longitude: 85.3334846, // Replace with actual longitude
    },
  },
  {
    id: 5,
    name: "Property 1 edited",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?hotel",
    location: {
      latitude: 27.6867253, // Replace with actual latitude
      longitude: 85.3412846, // Replace with actual longitude
    },
  },
  {
    id: 6,
    name: "Property 2",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?building",
    location: {
      latitude: 27.6957053, // Replace with actual latitude
      longitude: 85.3506846, // Replace with actual longitude
    },
  },
  {
    id: 7,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?flat",
    location: {
      latitude: 27.6957153, // Replace with actual latitude
      longitude: 85.3621836, // Replace with actual longitude
    },
  },
  {
    id: 8,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?room",
    location: {
      latitude: 27.6957453, // Replace with actual latitude
      longitude: 85.3726046, // Replace with actual longitude
    },
  },
  {
    id: 9,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
    "https://source.unsplash.com/800x600/?house ",
    location: {
      latitude: 27.6952053, // Replace with actual latitude
      longitude: 85.3826446, // Replace with actual longitude
    },
  },
  {
    id: 10,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?penthouse",
    location: {
      latitude: 27.6957653, // Replace with actual latitude
      longitude: 85.3937846, // Replace with actual longitude
    },
  },
  {
    id: 11,
    name: "Property 1 edited",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?hotel",
    location: {
      latitude: 27.6867253, // Replace with actual latitude
      longitude: 85.3588946, // Replace with actual longitude
    },
  },
  {
    id: 12,
    name: "Property 2",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?building",
    location: {
      latitude: 27.6957053, // Replace with actual latitude
      longitude: 85.3599846, // Replace with actual longitude
    },
  },
  {
    id: 13,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?flat",
    location: {
      latitude: 27.6957153, // Replace with actual latitude
      longitude: 85.3511836, // Replace with actual longitude
    },
  },
  {
    id: 14,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?room",
    location: {
      latitude: 27.6957453, // Replace with actual latitude
      longitude: 85.3522946, // Replace with actual longitude
    },
  },
  {
    id: 15,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
    "https://source.unsplash.com/800x600/?house ",
    location: {
      latitude: 27.6952053, // Replace with actual latitude
      longitude: 85.3501346, // Replace with actual longitude
    },
  },
  {
    id: 16,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?penthouse",
    location: {
      latitude: 27.6916653, // Replace with actual latitude
      longitude: 85.3566846, // Replace with actual longitude
    },
  },
  {
    id: 17,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?flat",
    location: {
      latitude: 27.6915153, // Replace with actual latitude
      longitude: 85.3025536, // Replace with actual longitude
    },
  },
  {
    id: 18,
    name: "Property 2",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?room",
    location: {
      latitude: 27.6914453, // Replace with actual latitude
      longitude: 85.3156646, // Replace with actual longitude
    },
  },
  {
    id: 19,
    name: "Property 3",
    address: "123 Fake Street",
    imageUrl:
    "https://source.unsplash.com/800x600/?house ",
    location: {
      latitude: 27.6913053, // Replace with actual latitude
      longitude: 85.3356346, // Replace with actual longitude
    },
  },
  {
    id: 20,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?penthouse",
    location: {
      latitude: 27.6912653, // Replace with actual latitude
      longitude: 85.3134846, // Replace with actual longitude
    },
  },
  {
    id: 21,
    name: "Property 1 edited",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?hotel",
    location: {
      latitude: 27.6811253, // Replace with actual latitude
      longitude: 85.3012846, // Replace with actual longitude
    },
  },
  {
    id: 22,
    name: "Property 2",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?building",
    location: {
      latitude: 27.6910053, // Replace with actual latitude
      longitude: 85.3806846, // Replace with actual longitude
    },
  },
  {
    id: 23,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?flat",
    location: {
      latitude: 27.6957153, // Replace with actual latitude
      longitude: 85.3601836, // Replace with actual longitude
    },
  },
  {
    id: 24,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?room",
    location: {
      latitude: 27.6857453, // Replace with actual latitude
      longitude: 85.3126046, // Replace with actual longitude
    },
  },
  {
    id: 25,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
    "https://source.unsplash.com/800x600/?house ",
    location: {
      latitude: 27.6752053, // Replace with actual latitude
      longitude: 85.3426446, // Replace with actual longitude
    },
  },
  {
    id: 26,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?penthouse",
    location: {
      latitude: 27.6657653, // Replace with actual latitude
      longitude: 85.3037846, // Replace with actual longitude
    },
  },
  {
    id: 27,
    name: "Property 1 edited",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?hotel",
    location: {
      latitude: 27.6567253, // Replace with actual latitude
      longitude: 85.3888946, // Replace with actual longitude
    },
  },
  {
    id: 28,
    name: "Property 2",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?building",
    location: {
      latitude: 27.4957053, // Replace with actual latitude
      longitude: 85.3549846, // Replace with actual longitude
    },
  },
  {
    id: 29,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?flat",
    location: {
      latitude: 27.3957153, // Replace with actual latitude
      longitude: 85.3011836, // Replace with actual longitude
    },
  },
  {
    id: 30,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?room",
    location: {
      latitude: 27.2957453, // Replace with actual latitude
      longitude: 85.3422946, // Replace with actual longitude
    },
  },
  {
    id: 31,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
    "https://source.unsplash.com/800x600/?house ",
    location: {
      latitude: 27.6152053, // Replace with actual latitude
      longitude: 85.35601346, // Replace with actual longitude
    },
  },
  {
    id: 32,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?penthouse",
    location: {
      latitude: 27.6057653, // Replace with actual latitude
      longitude: 85.3566846, // Replace with actual longitude
    },
  },
  {
    id: 33,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl:
      "https://source.unsplash.com/800x600/?penthouse",
    location: {
      latitude: 27.714711, // Replace with actual latitude
      longitude: 85.309008, // Replace with actual longitude
    },
  },
  // Add more fake properties with location information
];

const PropertiesPage: React.FC = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<any[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // To use fake data uncomment below commented code
    setProperties(fakeProperties);
    setFilteredProperties(fakeProperties);
    setIsLoading(false);
    // Uncomment the following code when using actual API

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
      <div className="bg-properties">
      <div className="container mx-auto mt-8 px-4 lg:px-2 ">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                      <img
                        src={property.imageUrl}
                        alt={`Property: ${property.name}`}
                        width={0}
                        height={0}
                        className="w-full h-52 object-cover rounded-md mb-4"
                      />
                      {/* Map Embedding */}
                      <div className="overflow-hidden rounded-lg">
                        <MapboxComponent
                          disableMove={false}
                          showNavigationControl={true}
                          showMarker={true}
                          latitude={property.location.latitude}
                          longitude={property.location.longitude}
                          zoom={11}
                          height="13rem"
                        />
                      </div>
                    </div>

                    {/* Property Name */}
                    <h3 className="text-xl font-semibold mb-2">
                      {property.name}
                    </h3>

                    {/* Property Address */}
                    <p className="text-gray-700 mb-4">{property.address}</p>

                    {/* Share Button */}
                    <button
                      className="flex mt-4 items-center bg-white text-red-500 px-3 py-1 rounded-md hover:bg-red-100 transition-all"
                      onClick={() => console.log("Share button clicked")}
                    >
                      Share
                    </button>
                  </div>
                  {/* End Property Card */}

                  {/* View Details Button */}
                  <button
                    className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700 focus:outline-none"
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
      </div>
    </AppLayout>
  );
};

export default PropertiesPage;
