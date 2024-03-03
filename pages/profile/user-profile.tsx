import React, { useState, useEffect, ReactNode } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHome,
  FaInfo,
} from "react-icons/fa";
import AppLayout from "../../components/utils/AppLayout";
import MapboxComponent from "../../components/mapbox/mapbox";
import PropertyCard from "../../components/propertyCard";

interface Listing {
  property_details: {
    title: any;
    latitude: number | undefined;
    longitude: number | undefined;
    details: string;
    id: number;
    name: string;
    address: string;
    image: string; 
    bedrooms: number;
    bathrooms: number;
    price: string;
    description: string; // Add description field}
  };
}

interface UserProfileData {
  firstName: string;
  email: string;
  phone: string;
}

const UserProfile = () => {
  const [profileData, setProfileData] = useState<UserProfileData>({
    firstName: "",
    email: "",
    phone: "",
  });

  const [priceRecommendations, setPriceRecommendations] = useState<Listing[]>(
    []
  );
  const [nearbyFlats, setNearbyFlats] = useState<Listing[]>([]);

  const [listings, setListings] = useState<Listing[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Listing | null>(
    null
  );
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPriceRecommendations = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch("http://localhost:8080/recommend_price", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch price recommendations");
      }

      const data = await response.json();
      setPriceRecommendations(data); // Update your state with the received data
    } catch (err) {
      console.error("Error fetching price recommendations:", err);
      setError("An error occurred while fetching price recommendations.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchNearbyFlats = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        "http://localhost:8080/recommend_properties",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch nearby flats");
      }

      const data = await response.json();
      setNearbyFlats(data); // Update your state with the received data
    } catch (err) {
      console.error("Error fetching nearby flats:", err);
      setError("An error occurred while fetching nearby flats.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("access_token");
        const response = await fetch("http://localhost:8080/user_details", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }
        const profile = await response.json();
        setProfileData(profile);
      } catch (err) {
        setError("An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPriceRecommendations();
    fetchNearbyFlats();
    fetchProfileData();
  }, []);

  const handleViewMap = ({ property_details: property }: Listing) => {
    setSelectedProperty({ property_details: property });
    setIsMapModalOpen(true);
  };

  const handleCloseMapModal = () => {
    setIsMapModalOpen(false);
    setSelectedProperty(null);
  };

  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

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
      <div className="flex justify-center items-center bgLogin z-40">
        <div className="relative w-full max-w-4xl p-8 mx-auto bg-slate-100 rounded-lg shadow-xl">
          {/* Profile Data */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <div className="flex items-center gap-4">
              <FaUserCircle size={50} className="text-blue-500" />
              <div>
                <h2 className="text-2xl font-semibold text-blue-600">
                  {profileData.firstName}
                </h2>
                <p className="text-gray-600">
                  <FaEnvelope className="inline mr-2" />
                  {profileData.email}
                </p>
                <p className="text-gray-600">
                  <FaPhone className="inline mr-2" />
                  {profileData.phone}
                </p>
              </div>
            </div>
          </div>
          {/* Skeleton Loading for Price Recommendations */}
          <div className="my-8">
            <h2 className="text-2xl font-bold mb-4">Price Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading
                ? [1, 2, 3].map((index) => (
                    <div key={index} className="animate-pulse">
                      <div className="bg-gray-300 w-full h-60 rounded-md mb-4"></div>
                      <div className="bg-gray-300 h-4 w-2/3 rounded mb-2"></div>
                      <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
                    </div>
                  ))
                : priceRecommendations.map((listing) => (
                    <PropertyCard
                      key={listing.property_details.id}
                      property={listing}
                      onViewMap={() => handleViewMap(listing)}
                    />
                  ))}
            </div>
          </div>

          {/* Skeleton Loading for Nearby Flats */}
          <div className="my-8">
            <h2 className="text-2xl font-bold mb-4">Nearby Flats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading
                ? [1, 2, 3].map((index) => (
                    <div key={index} className="animate-pulse">
                      <div className="bg-gray-300 w-full h-60 rounded-md mb-4"></div>
                      <div className="bg-gray-300 h-4 w-2/3 rounded mb-2"></div>
                      <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
                    </div>
                  ))
                : nearbyFlats.map((listing) => (
                    <PropertyCard
                      key={listing.property_details.id}
                      property={listing}
                      onViewMap={() => handleViewMap(listing)}
                    />
                  ))}
            </div>
          </div>

          {/* Map Modal */}
          {isMapModalOpen && selectedProperty && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center mb-1"
              onClick={handleMapClick}
            >
              <div className="bg-white p-8 rounded-lg mt-32 w-full sm:w-3/4 md:w-1/2 lg:w-2/3 xl:w-1/2">
                {/* Mapbox Component */}

                <MapboxComponent
                  disableMove={false}
                  showNavigationControl={true}
                  showMarker={true}
                  latitude={selectedProperty.property_details.latitude}
                  longitude={selectedProperty.property_details.longitude}
                  zoom={13}
                  height="400px"
                  properties={[selectedProperty?.property_details]}
                  showAllProperties={true}
                />

                {/* Additional Property Details */}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {selectedProperty.property_details.name}
                  </h3>
                  <p className="text-gray-700">
                    {selectedProperty.property_details.address}
                  </p>
                  <p className="text-gray-700">
                    Bedrooms: {selectedProperty.property_details.bedrooms},
                    Bathrooms: {selectedProperty.property_details.bathrooms}
                  </p>
                  <p className="text-gray-700">
                    Price: {selectedProperty.property_details.price}
                  </p>
                  <p className="text-gray-700">
                    Description: {selectedProperty.property_details.description}
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

export default UserProfile;
