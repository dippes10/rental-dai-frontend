/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import { FaHome, FaUser, FaClipboardList, FaNewspaper, FaCalendarAlt, FaFileAlt, FaPlus } from "react-icons/fa";
import router from "next/router";

const ListerProfile: React.FC = () => {
  const [showForm, setShowForm] = useState(false); // State to control the display of the ListerForm


  // Placeholder data (replace with actual data)
  const listerData = {
    name: "John Doe",
    propertiesListed: 5,
    upcomingBookings: 3,
    messages: 8,
    newsAndUpdates: [
      {
        id: 1,
        title: "New Feature Released",
        content: "Exciting news! We've just released a new feature for better property management.",
      },
      {
        id: 2,
        title: "Upcoming Maintenance",
        content: "Scheduled maintenance on the platform on October 15. Please plan accordingly.",
      },
    ],
    recentBookings: [
      {
        id: 1,
        property: "Cozy Apartment",
        checkInDate: "2023-10-20",
        checkOutDate: "2023-10-25",
      },
      {
        id: 2,
        property: "Luxury Villa",
        checkInDate: "2023-11-01",
        checkOutDate: "2023-11-10",
      },
    ],
    // Add more data properties as needed
  };

  return (

    <div className="bg-gray-100 min-h-screen">
      {/* <Navbar/> */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Welcome back, {listerData.name}!</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Property Listings */}
          <ProfileStat
            icon={<FaHome className="text-4xl text-red-500" />}
            title="Properties Listed"
            value={listerData.propertiesListed}
          />
          {/* Upcoming Bookings */}
          <ProfileStat
            icon={<FaClipboardList className="text-4xl text-green-500" />}
            title="Upcoming Bookings"
            value={listerData.upcomingBookings}
          />
          {/* Messages */}
          <ProfileStat
            icon={<FaUser className="text-4xl text-red-500" />}
            title="Messages"
            value={listerData.messages}
          />
        </div>

        {/* Recent Bookings */}
        <RecentBookings bookings={listerData.recentBookings} />

        {/* Profile Overview */}
        <ProfileOverview />

        {/* Quick Actions */}
        <QuickActions />

        {/* News and Updates */}
        <NewsAndUpdates updates={listerData.newsAndUpdates} />

        {/* "Add Listing" button */}
        <div className="flex flex-row justify-center mt-8">
          <button
                      onClick={() => router.push("/forms/lister-form")}
            className="bg-gradient-to-r flex flex-row items-center from-red-500 to-red-700 text-white px-6 py-3 rounded-md focus:outline-none focus:ring focus:border-red-300"
          >
            <FaPlus className="mr-2" />
            Add Listing
          </button>
        </div>

      </div>
    </div>
  );
};

// ProfileStat component
const ProfileStat: React.FC<{ icon: React.ReactNode; title: string; value: number }> = ({ icon, title, value }) => (
  <div className="p-6 bg-white shadow-md rounded-md flex items-center justify-between transform hover:scale-105 transition-transform">
    <div>{icon}</div>
    <div className="ml-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

// RecentBookings component
const RecentBookings: React.FC<{ bookings: Array<{ id: number; property: string; checkInDate: string; checkOutDate: string }> }> = ({ bookings }) => (
  <div className="mt-8">
    <h2 className="text-xl font-bold mb-4">Recent Bookings</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="p-6 bg-white shadow-md rounded-md flex items-center justify-between transform hover:scale-105 transition-transform"
        >
          <div>
            <h3 className="text-lg font-semibold">{booking.property}</h3>
            <p className="text-gray-600">
              Check-in: {booking.checkInDate} - Check-out: {booking.checkOutDate}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ProfileOverview component
const ProfileOverview: React.FC = () => (
  <div className="mt-8">
    <h2 className="text-xl font-bold mb-4">Profile Overview</h2>
    {/* Add more profile information and statistics here */}
  </div>
);

// QuickActions component
const QuickActions: React.FC = () => (
  <div className="mt-8">
    <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Quick actions components */}
      <QuickAction icon={<FaCalendarAlt className="text-4xl text-yellow-500" />} title="Book a Property" />
      <QuickAction icon={<FaFileAlt className="text-4xl text-red-500" />} title="Manage Listings" />
      {/* Add more quick action components as needed */}
    </div>
  </div>
);

// QuickAction component
const QuickAction: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div
    className="p-6 bg-white shadow-md rounded-md flex items-center justify-between transform hover:scale-105 transition-transform"
  >
    <div>{icon}</div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  </div>
);

// NewsAndUpdates component
const NewsAndUpdates: React.FC<{ updates: Array<{ id: number; title: string; content: string }> }> = ({ updates }) => (
  <div className="mt-8">
    <h2 className="text-xl font-bold mb-4">News and Updates</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      {updates.map((update) => (
        <div
          key={update.id}
          className="p-6 bg-white shadow-md rounded-md flex flex-col justify-between transform hover:scale-105 transition-transform"
        >
          <div>
            <h3 className="text-lg font-semibold">{update.title}</h3>
            <p className="text-gray-600">{update.content}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ListerProfile;
