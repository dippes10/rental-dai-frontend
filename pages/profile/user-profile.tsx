import React, { useState, useEffect, ReactNode } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHome,
  FaInfo,
} from "react-icons/fa";
import AppLayout from "../../components/AppLayout";
import MapboxComponent from "../../components/mapbox/mapbox";
import router from "next/router";
import Button from "../../components/Button";
import PropertyCard from "../../components/propertyCard";

interface Listing {
  title: any;
  latitude: number | undefined;
  longitude: number | undefined;
  details: string;
  id: number;
  name: string;
  address: string;
  images: string[]; // Array of image URLs
  bedrooms: number;
  bathrooms: number;
  price: string;
  description: string; // Add description field
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

  const [priceRecommendations, setPriceRecommendations] = useState<Listing[]>([]);
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
      const response = await fetch('http://localhost:8080/price_recommendations', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include any other headers like Authorization if needed
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
      const response = await fetch('http://localhost:8080/nearby_flats', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include any other headers like Authorization if needed
        },
      });
  
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

    const fetchListings = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("access_token");
        const response = await fetch(
         "http://localhost:8080/",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch listings");
        }
        const data = await response.json();
        const updatedListings = data.map((listing: { images: string }) => ({
          ...listing,
          images: listing.images ? listing.images.split(",") : [],
        }));
        setListings(updatedListings);
      } catch (err) {
        setError("An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPriceRecommendations();
    fetchNearbyFlats();
    fetchProfileData();
    fetchListings();
  }, []);

  const handleViewMap = (property: Listing) => {
    setSelectedProperty(property);
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

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white p-4 rounded-lg shadow-md">
              {/* Listing Details */}

              <h3 className="text-xl font-bold mb-2 text-blue-600">
                <FaHome className="inline mr-2 text-green-500" />
                {listing.name}
              </h3>
              <p className="mb-2 text-gray-600">
                <FaMapMarkerAlt className="inline mr-2 text-red-500" />
                {listing.address}
              </p>
              <p className="mb-4 text-gray-600">
                <FaInfo className="inline mr-2 text-yellow-500" />
                {listing.details}
              </p>

              {/* Images */}
              {listing.images.map((image, index) => (
                <img
                  key={index}
                  src={`http:/localhost:8080/${image.trim()}`}
                  alt={`Listing ${listing.title} - Image ${index + 1}`}
                  className="w-full h-52 object-cover rounded-md mb-4"
                />
              ))}

              {/* View Map Button */}
              <button
                className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700 flex items-center"
                onClick={() => handleViewMap(listing)}
              >
                <FaMapMarkerAlt className="mr-2" /> View Map
              </button>
            </div>
          ))}
        </div>

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

 {/* Price Recommendations Section */}
 <div className="my-8">
            <h2 className="text-2xl font-bold mb-4">Price Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {priceRecommendations.map(listing => (
                <PropertyCard key={listing.id} property={listing} onViewMap={() => handleViewMap(listing)} />
              ))}
            </div>
          </div>

          {/* Nearby Flats Section */}
          <div className="my-8">
            <h2 className="text-2xl font-bold mb-4">Nearby Flats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyFlats.map(listing => (
                <PropertyCard key={listing.id} property={listing} onViewMap={() => handleViewMap(listing)} />
              ))}
            </div>
          </div>

    
    </AppLayout>
  );
};

export default UserProfile;
