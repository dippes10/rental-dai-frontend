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
}

const ListerProfile = () => {
  const [profileData, setProfileData] = useState<ListerProfileData>({
    name: "",
    email: "",
    phone: "",
  });
  const [listings, setListings] = useState<Listing[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Listing | null>(
    null
  );
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleStartClick = () => {
    router.push("/Forms/lister-form");
    setShowMenu(false);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("access_token"); // Assuming you store the token in localStorage
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

    const fetchListings = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("access_token");
        const response = await fetch(
          "http://localhost:8080/lister_properties",
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
        setListings(data);
      } catch (err) {
        setError("An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    };

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

  return (
    <div className="bg-gray-200 min-h-screen text-black pt-8 pb-6 bg-blue-100 px-4 flex item-center">
    <AppLayout>
      {/* Profile Data */}
      <div className="bg-neutral-100 text-black pt-8 pb-6 bg-blue-100 justify-center item-center">
      <div className="container mx-auto px-4 justify-center">
        <div className="flex flex-wrap justify-between items-center gap-8">
          <FaUserCircle size={50} className="mr-4" />
          <div>
            <h2 className="text-xl font-bold">{profileData.name}</h2>
            <p>
              <FaEnvelope className="inline mr-2" />
              {profileData.email}
            </p>
            <p>
              <FaPhone className="inline mr-2" />
              {profileData.phone}
            </p>
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <p>Loading listings...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          listings.map((listing) => (
            <div key={listing.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                <FaHome className="inline mr-2" />
                {listing.title}
              </h3>
              <p className="mb-2 text-gray-600">
                <FaMapMarkerAlt className="inline mr-2" />
                {listing.address}
              </p>
              <p className="mb-4 text-gray-600">
                <FaInfo className="inline mr-2" />
                {listing.details}
              </p>
              {/* Optionally display images */}

              {/* {listing.images && listing.images.split(",").map((imagePath: string, index: number) => (
  <img
    key={index}
    src={"http://127.0.0.1:8080/" + imagePath.trim()}
    alt={`Image ${index}`}
    className="w-full h-52 object-cover rounded-md mb-4"
  />
))} */}

              {/* View Map Button */}
              <button
                className="mt-2 bg-blue-500
text-white p-2 rounded hover:bg-blue-700 flex items-center"
                onClick={() => handleViewMap(listing)}
              >
                <FaMapMarkerAlt className="mr-2" /> View Map
              </button>
            </div>
          ))
        )}
      </div>

      {/* Map Modal */}
      {isMapModalOpen && selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-xl">
            <MapboxComponent
              latitude={selectedProperty.latitude}
              longitude={selectedProperty.longitude}
              // Add any other necessary props for your MapboxComponent
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
            <div className="flex item-center text-center justify-between">
        <Button 
        type="outline"
        title="Add Listing"
        onClick={handleClick}/>
      </div>
              </div>
    </AppLayout>
    </div>
  );
};

export default ListerProfile;
