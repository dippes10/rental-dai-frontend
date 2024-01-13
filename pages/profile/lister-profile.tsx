import React, { useState, useEffect } from "react";
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

interface Listing {
  id: number;
  title: string;
  address: string;
  details: string;
  latitude: number;
  longitude: number;
  images: string[];
}

interface ListerProfileData {
  name: string;
  email: string;
  phone: string;
  latitude: number;
  longitude: number;
}

const UserProfile = () => {
  const [profileData, setProfileData] = useState<ListerProfileData>({
    name: "",
    email: "",
    phone: "",
    latitude: 0,
    longitude: 0,
  });
  const [listings, setListings] = useState<Listing[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Listing | null>(null);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

    fetchProfileData();
  }, []);

  const handleViewMap = (property: Listing) => {
    setSelectedProperty(property);
    setIsMapModalOpen(true);
  };

  const handleCloseMapModal = () => {
    setIsMapModalOpen(false);
    setSelectedProperty(null);
  };

  const handleClick = () => {
    router.push("/Forms/lister-form");
  };

  return (
    <AppLayout>
      <div className="flex justify-center items-center bgLogin z-40">
        <div className="relative w-full max-w-xl p-8 mx-auto px-4 bg-slate-100 items-center py-8 rounded-lg shadow-xl">
          {/* Profile Data */}
          <div className="bg-gray-300 shadow-sm hover:shadow-md rounded-md p-6 mb-12">
            <div className="flex items-center gap-4">
              <FaUserCircle size={50} className="text-red-500" />
              <div className="">
                <h2 className="text-2xl font-semibold text-black">
                  {profileData.name}
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
            {/* User Location Map */}
            <div className="my-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Your Location
              </h3>
              <MapboxComponent
                latitude={profileData.latitude}
                longitude={profileData.longitude}
              />
            </div>
          </div>


          {/* Listings Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Your Listings</h3>
            <p className="text-gray-600">Explore and manage your property listings here.</p>
          </div>

          {/* Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <div key={listing.id} className="bg-gray-400 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-blue-600">
                  <FaHome className="inline mr-2 text-green-500" />
                  {listing.title}
                </h3>
                <p className="mb-2 text-gray-600">
                  <FaMapMarkerAlt className="inline mr-2 text-red-500" />
                  {listing.address}
                </p>
                <p className="mb-4 text-gray-600">
                  <FaInfo className="inline mr-2 text-yellow-500" />
                  {listing.details}
                </p>

                {listing.images.map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:8080/${image.trim()}`}
                    alt={`Listing ${listing.title} - Image ${index + 1}`}
                    className="w-full h-52 object-cover rounded-md mb-4"
                  />
                ))}
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
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-4 rounded-lg shadow-xl">
                <MapboxComponent
                  latitude={selectedProperty.latitude}
                  longitude={selectedProperty.longitude}
                />
                <button
                  className="mt-2 bg-red-500 text-white p-2 rounded hover:bg-red-700 flex items-center"
                  onClick={handleCloseMapModal}
                >
                  Close Map
                </button>
              </div>
            </div>
          )}

          {/* Add Listing Button */}
          <div className="text-center mt-6">
            <Button type="outline" title="Add Listing" onClick={handleClick} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default UserProfile;
