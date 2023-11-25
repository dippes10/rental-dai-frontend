/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import { FaHome, FaClipboardList, FaUser, FaCalendarAlt, FaFileAlt } from "react-icons/fa";
import router from "next/router";
import Image from "next/image";

const UserProfile: React.FC = () => {
  // Expanded placeholder data for user profile
  const userData = {
    name: "Jane Doe",
    email: "jane@example.com",
    profilePicture: "url/to/profile-picture.jpg",
    bookingsMade: 3,
    messagesReceived: 8,
    propertiesOwned: 2,
    // Add more data properties as needed
  };

  // Sample data for recent bookings
  const recentBookings = [
    {
      id: 1,
      property: "Ocean View Villa",
      checkInDate: "2023-12-01",
      checkOutDate: "2023-12-10",
      guests: 2,
      totalCost: 1200,
    },
    {
      id: 2,
      property: "Mountain Cabin Retreat",
      checkInDate: "2024-01-05",
      checkOutDate: "2024-01-10",
      guests: 4,
      totalCost: 800,
    },
  ];

  // Sample data for news and updates
  const newsAndUpdates = [
    {
      id: 1,
      title: "Exciting News!",
      content: "We are launching a new loyalty program. Stay tuned for exclusive benefits!",
      date: "2023-11-15",
    },
    {
      id: 2,
      title: "Holiday Discounts",
      content: "Enjoy special discounts on bookings made during the holiday season.",
      date: "2023-12-05",
    },
  ];

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
  const RecentBookings: React.FC<{ userBookings: Array<{ id: number; property: string; checkInDate: string; checkOutDate: string; guests: number; totalCost: number }> }> = ({ userBookings }) => (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Recent Bookings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {userBookings.map((booking) => (
          <div
            key={booking.id}
            className="p-6 bg-white shadow-md rounded-md flex items-center justify-between transform hover:scale-105 transition-transform"
          >
            <div>
              <h3 className="text-lg font-semibold">{booking.property}</h3>
              <p className="text-gray-600">
                Check-in: {booking.checkInDate} - Check-out: {booking.checkOutDate}
                <br />
                Guests: {booking.guests} | Total Cost: ${booking.totalCost}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // UserProfileOverview component
  const UserProfileOverview: React.FC = () => (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Profile Overview</h2>
      <div className="flex items-center">
        <Image src={userData.profilePicture} alt={userData.name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="text-gray-600">{userData.email}</p>
          {/* Add more profile information and statistics here */}
        </div>
      </div>
    </div>
  );

  // QuickActions component
  const QuickActions: React.FC = () => (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Quick actions components */}
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
  );

  // NewsAndUpdates component
  const NewsAndUpdates: React.FC<{ updates: Array<{ id: number; title: string; content: string; date: string }> }> = ({ updates }) => (
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
            <p className="text-sm text-gray-400">{update.date}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // PropertiesPage component
  const PropertiesPage: React.FC = () => (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Properties Listing</h2>
      {/* Add your properties listing components or data here */}
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Welcome back, {userData.name}!</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Bookings Made */}
          <ProfileStat
            icon={<FaClipboardList className="text-4xl text-green-500" />}
            title="Bookings Made"
            value={userData.bookingsMade}
          />
          {/* Messages Received */}
          <ProfileStat
            icon={<FaUser className="text-4xl text-red-500" />}
            title="Messages Received"
            value={userData.messagesReceived}
          />
          {/* Additional Profile Stats */}
          <ProfileStat
            icon={<FaHome className="text-4xl text-red-500" />}
            title="Properties Owned"
            value={userData.propertiesOwned}
          />
        </div>

        {/* Recent Bookings */}
        <RecentBookings userBookings={recentBookings} />

        {/* User Profile Overview */}
        <UserProfileOverview />

        {/* Quick Actions */}
        <QuickActions />

        {/* News and Updates */}
        <NewsAndUpdates updates={newsAndUpdates} />

        {/* Properties Listing Section */}
        <PropertiesPage />
      </div>
    </div>
  );
};

export default UserProfile;
