import React, { useState } from "react";
import {
  FaUserEdit,
  FaEnvelope,
  FaPhone,
  FaEdit,
  FaTrashAlt,
  FaStar,
  FaHeart,
  FaComments,
  FaHistory,
} from "react-icons/fa";
import AppLayout from "../../components/AppLayout";

const ListerProfile = () => {
   // User Data State
   const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    imageUrl: "https://images.unsplash.com/photo-1560264280-88e9c1c35330", // Sample user image from Unsplash
  });

  // Sample Data States
  const [listings, setListings] = useState([
    {
      id: 1,
      title: "Beautiful Apartment",
      imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be", // Sample listing image from Unsplash
      views: 120,
      inquiries: 5,
    },
    // Add more sample listings with Unsplash images
  ]);

  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Cozy Cottage",
      imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", // Sample favorite image from Unsplash
      location: "Lake View",
    },
    {
      id: 2,
      title: "Modern Apartment",
      imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156", // Sample favorite image from Unsplash
      location: "City Center",
    },
  ]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Alice",
      content: "Is the apartment still available?",
      date: "2023-01-20",
    },
    {
      id: 2,
      sender: "Bob",
      content: "Can I schedule a visit?",
      date: "2023-01-22",
    },
  ]);

  const [rentalHistory, setRentalHistory] = useState([
    {
      id: 1,
      property: "Modern Condo",
      date: "2023-01-15",
      status: "Completed",
    },
    { id: 2, property: "Beach House", date: "2022-12-10", status: "Completed" },
  ]);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      reviewer: "Bob",
      rating: 4,
      comment: "Great experience!",
      date: "2023-01-18",
    },
    {
      id: 2,
      reviewer: "Alice",
      rating: 5,
      comment: "Amazing host!",
      date: "2023-01-15",
    },
  ]);

  // Handler Functions (to be implemented)
  const handleEditProfile = () => {
    /* Implement Functionality */
  };
  const handleEditListing = (listingId: number) => {
    // Implement functionality using listingId
    // Example: console.log(`Editing listing with ID: ${listingId}`);
  };

  const handleDeleteListing = (listingId: number) => {
    // Implement functionality using listingId
    // Example: console.log(`Deleting listing with ID: ${listingId}`);
  };

  return(
    <AppLayout>
  <div className="min-h-screen bg-red-50 font-sans">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Profile Header */}
    <div className="bg-red-100 shadow-md p-6 flex items-center space-x-6 rounded-lg my-4">
        <img
          src={userData.imageUrl}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-red-300"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-red-600">
            {userData.name}
          </h1>
          <p className="flex items-center text-red-500 text-sm mt-2">
            <FaEnvelope className="mr-2" />
            {userData.email}
          </p>
          <p className="flex items-center text-red-500 text-sm">
            <FaPhone className="mr-2" />
            {userData.phone}
          </p>
        </div>
        <button
          onClick={handleEditProfile}
          className="ml-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded transition duration-200"
        >
          <FaUserEdit className="inline mr-2" /> Edit Profile
        </button>
      </div>

      {/* Dashboard Menu */}
      <div className="flex overflow-x-auto space-x-4 bg-white py-3 px-4">
        <a href="/my-listings" className="text-blue-500 hover:underline">
          My Listings
        </a>
        <a href="/favorites" className="text-blue-500 hover:underline">
          Favorites
        </a>
        <a href="/messages" className="text-blue-500 hover:underline">
          Messages
        </a>
        <a href="/settings" className="text-blue-500 hover:underline">
          Account Settings
        </a>
      </div>

      {/* My Listings Section */}
      <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-red-600">My Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.map((listing) => (
            <div key={listing.id} className="border rounded-lg p-4 shadow-sm">
              <img
                src={listing.imageUrl}
                alt={listing.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{listing.title}</h3>
              <p>Views: {listing.views}</p>
              <p>Inquiries: {listing.inquiries}</p>
              <div className="flex mt-2">
                <button
                  onClick={() => handleEditListing(listing.id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  <FaEdit className="inline mr-2" /> Edit
                </button>
                <button
                  onClick={() => handleDeleteListing(listing.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  <FaTrashAlt className="inline mr-2" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other sections */}

      <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-red-600">Favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="border rounded-lg p-4 shadow-sm">
              <img
                src={favorite.imageUrl}
                alt={favorite.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{favorite.title}</h3>
              <p>{favorite.location}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-red-600">Messages</h2>
        <div className="divide-y divide-gray-200">
          {messages.map((message) => (
            <div key={message.id} className="py-2">
              <p className="font-semibold">{message.sender}</p>
              <p>{message.content}</p>
              <p className="text-sm text-gray-500">{message.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-red-600">Rental History</h2>
        <div className="divide-y divide-gray-200">
          {rentalHistory.map((history) => (
            <div key={history.id} className="py-2">
              <p className="font-semibold">{history.property}</p>
              <p>{history.date}</p>
              <p>Status: {history.status}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-red-600">
          Reviews & Ratings
        </h2>
        <div className="divide-y divide-gray-200">
          {reviews.map((review) => (
            <div key={review.id} className="py-2">
              <div className="flex items-center">
                <FaStar className="text-yellow-500 mr-1" />
                <span className="font-semibold">{review.reviewer}</span>
              </div>
              <p className="text-sm">{review.comment}</p>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </AppLayout>
  );
};

export default ListerProfile;
