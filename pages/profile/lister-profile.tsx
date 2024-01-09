import React, { useState, useEffect } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaUserEdit,
  FaCog,
  FaHome,
} from "react-icons/fa";
import AppLayout from "../../components/AppLayout";
import Link from "next/link";
import ListerForm from "../../pages/Forms/lister-form";

import CardLineChart from "../../components/Cards/CardBarChart";
import CardBarChart from "../../components/Cards/CardBarChart";
import CardPageVisits from "../../components/Cards/CardPageVisits";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic";
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
  views: number;
  inquiries: number;
}

const handleButtonClick = () => {
  router.push("/Forms/lister-form");
  
};

const ListerProfile = () => {
  const [userData, setUserData] = useState({
    name: "SJ don",
    email: "sj4321@gmail.com",
    phone: "9854110021",
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingListings, setIsEditingListings] = useState(false);

  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Replace with your actual API call
    const fetchListings = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/listings");
        if (!response.ok) throw new Error("Failed to fetch listings");
        const data = await response.json();
        setListings(data);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    };
    fetchListings();
  }, []);

  const saveUserProfile = async (userData: {
    name: string;
    email: string;
    phone: string;
  }) => {
    try {
      const response = await fetch("/api/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to save user profile");
      }
      // Handle success or any additional logic here
    } catch (error) {
      // Handle errors appropriately
      console.error("Error saving user profile:", error);
    }
  };

  const handleEditProfile = () => {
    if (isEditingProfile) {
      // Save changes to the backend
      saveUserProfile(userData); // Implement saveUserProfile function
    }
    setIsEditingProfile(!isEditingProfile);
  };

  const handleListingChange = (id: number, property: string, value: string) => {
    // Implement change handling for listings
    // Update the listings state with the modified data
    const updatedListings = listings.map((listing) =>
      listing.id === id ? { ...listing, [property]: value } : listing
    );
    setListings(updatedListings);
  };

  return (
    <AppLayout>
      <div className="lister-profile">
        <div className="p-6 bg-red-600 rounded-lg flex items-center justify-between transform hover:scale-105 transition-transform">
          <Link href="/properties/listing" className="menu-item">
            <div className="dashboard-link flex items-center text-white">
              <FaHome className="mr-2 text-2xl" /> My Listings
            </div>
          </Link>
          <Link href="/settings" className="menu-item">
            <div className="dashboard-link flex items-center text-white">
              <FaCog className="mr-2 text-2xl" /> Account Settings
            </div>
          </Link>
        </div>

        <div className="profile-header">
          <div className="profile-icon">
            <FaUserCircle />
          </div>
          <div className="user-details">
            {isEditingProfile ? (
              // Editable fields for user profile
              <>
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  className="edit-input"
                />
                <input
                  type="text"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  className="edit-input"
                />
                <input
                  type="text"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value })
                  }
                  className="edit-input"
                />
              </>
            ) : (
              // Display user profile
              <>
                <h1>{userData.name}</h1>
                <p>
                  <FaEnvelope /> {userData.email}
                </p>
                <p>
                  <FaPhone /> {userData.phone}
                </p>
              </>
            )}
          </div>
          <button onClick={handleEditProfile} className="edit-profile-button">
            {isEditingProfile ? <FaUserEdit /> : "Edit Profile"}
          </button>
        </div>

        <div className="analytics-section">
          <h2 className="text-xl font-semibold mb-4">Listing Analytics</h2>
        </div>

        <div className="listings-section">
          <h2>My Listings</h2>
          {isLoading ? (
            <p>Loading listings...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : (
            <div className="listings-grid">
              {listings.map((listing) => (
                <div key={listing.id} className="listing-card">
                  {isEditingListings ? (
                    // Editable fields for listings
                    <>
                      <input
                        type="text"
                        value={listing.title}
                        onChange={(e) =>
                          handleListingChange(
                            listing.id,
                            "title",
                            e.target.value
                          )
                        }
                        className="edit-input"
                      />
                      {/* Add editable fields for other listing properties */}
                    </>
                  ) : (
                    // Display listing details
                    <>
                      <h3>{listing.title}</h3>
                      <p>Address: {listing.address}</p>
                      {/* Display other listing details */}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
          <Button 
            type="outline"
            title="Add Listing"
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default ListerProfile;


// function setShowMenu(arg0: boolean) {
//   throw new Error("Function not implemented.");
// }
