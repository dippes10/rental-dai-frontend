/* eslint-disable react/jsx-no-undef */
import React from "react";
import Navbar from "../components/Navbar/navbar";
import {
  FaHome,
  FaUser,
  FaClipboardList,
  FaNewspaper,
  FaCalendarAlt,
  FaFileAlt,
} from "react-icons/fa";

const ListerProfile: React.FC = () => {
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
          <div className="p-6 bg-white shadow-md rounded-md flex items-center justify-between transform hover:scale-105 transition-transform">
            <div>
              <FaHome className="text-4xl text-blue-500" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-blue-500">Properties Listed</h2>
              <p className="text-gray-600">{listerData.propertiesListed}</p>
            </div>
          </div>

          {/* Upcoming Bookings */}
          <div className="p-6 bg-white shadow-md rounded-md flex items-center justify-between transform hover:scale-105 transition-transform">
            <div>
              <FaClipboardList className="text-4xl text-green-500" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-green-500">Upcoming Bookings</h2>
              <p className="text-gray-600">{listerData.upcomingBookings}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="p-6 bg-white shadow-md rounded-md flex items-center justify-between transform hover:scale-105 transition-transform">
            <div>
              <FaUser className="text-4xl text-purple-500" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-purple-500">Messages</h2>
              <p className="text-gray-600">{listerData.messages}</p>
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Recent Bookings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            {listerData.recentBookings.map((booking) => (
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

        {/* Profile Overview */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Profile Overview</h2>
          {/* Add more profile information and statistics here */}
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              className="p-6 bg-white shadow-md rounded-md flex items-center justify-between transform hover:scale-105 transition-transform"
            >
              <div>
                <FaCalendarAlt className="text-4xl text-yellow-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Book a Property</h3>
              </div>
            </div>
            <div
              className="p-6 bg-white shadow-md rounded-md flex items-center justify-between transform hover:scale-105 transition-transform"
            >
              <div>
                <FaFileAlt className="text-4xl text-red-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Manage Listings</h3>
              </div>
            </div>
            {/* Add more quick action components as needed */}
          </div>
        </div>

        {/* News and Updates */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">News and Updates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            {listerData.newsAndUpdates.map((update) => (
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
      </div>
    </div>
  );
};

export default ListerProfile;
