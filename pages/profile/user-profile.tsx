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

interface UserProfileData {
  name: string;
  email: string;
  phone: string;
  longitude: string;
  latitude: string;
}

const ListerProfile = () => {
  const [profileData, setProfileData] = useState<UserProfileData>({
    name: "",
    email: "",
    phone: "",
    longitude: "",
    latitude: "",
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
        const firstName = profile.name.split(' ')[0];
        setProfileData({...profile, name: firstName});
      } catch (err) {
        setError("An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleClick = () => {
    router.push("/Forms/user-form");
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
          </div>

          {/* User Location Map */}
          {profileData.latitude && profileData.longitude ? (
            <div className="my-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Your Location
              </h3>
              <MapboxComponent
                latitude={parseFloat(profileData.latitude)}
                longitude={parseFloat(profileData.longitude)}
              />
            </div>
          ) : (
            <p className="text-gray-600 my-6">Location data not available.</p>
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

export default ListerProfile;
