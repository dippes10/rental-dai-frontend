import React, { useState, useEffect } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHome,
  FaInfo,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import AppLayout from "../../components/utils/AppLayout";
import MapboxComponent from "../../components/mapbox/mapbox";
import router from "next/router";
import Button from "../../components/Button";
import { toast } from "sonner";

interface Listing {
  id: number;
  title: string;
  name: string;
  address: string;
  details: string;
  description: string;
  latitude: number;
  longitude: number;
  image: string;
}

interface ListerProfileData {
  firstName: string;
  email: string;
  phone: string;
}

const ListerProfile = () => {
  const [profileData, setProfileData] = useState<ListerProfileData>({
    firstName: "",
    email: "",
    phone: "",
  });
  const [listings, setListings] = useState<Listing[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Listing | null>(
    null
  );
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

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
        const updatedListings = data.map((listing: any) => ({
          ...listing,
          images: listing.images ? listing.images.split(",") : [],
          id: listing.id,
        }));
        setListings(updatedListings);
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

  const handleClick = (): void => {
    router.push("/Forms/lister-form");
  };

  const handleDelete = async (propertyId: number) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/properties/${propertyId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete property");
      }

      toast.success("Property deleted successfully!");
      router.reload(); // Reload the page to reflect changes
    } catch (error) {
      console.log("Error deleting property:");
      toast.error(`Failed to delete property: `);
    }
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="flex flex-col bg-white p-4 rounded-lg shadow-md h-full"
              >
                {/* Listing Details */}
                <div className="flex-grow">
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
                    {listing.description}
                  </p>

                  {/* Images */}
                  {listing.image?.split(",").map((image, index) => (
                    <img
                      key={index}
                      src={`http://localhost:8080/${image.trim()}`}
                      alt={`Listing ${listing.title} - Image ${index + 1}`}
                      className="w-full h-52 object-cover rounded-md mb-4"
                    />
                  ))}
                </div>

                {/* Buttons Container */}
                <div className="mt-4 flex justify-between items-center">
                  {/* View Map Button */}
                  <button
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 flex items-center"
                    onClick={() => handleViewMap(listing)}
                  >
                    <FaMapMarkerAlt className="mr-2" /> View Map
                  </button>

                  {/* Delete Button */}
                  <button
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-700 flex items-center"
                    onClick={() => handleDelete(listing.id)}
                  >
                    <FaTrash />
                  </button>

                  {/* Edit Button */}
                  <button
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 flex items-center"
                    onClick={() => router.push("/Forms/edit-property")}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
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
    </AppLayout>
  );
};

export default ListerProfile;
