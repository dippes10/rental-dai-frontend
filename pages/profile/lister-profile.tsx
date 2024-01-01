import React, { ReactNode, useState } from "react";
import {
  FaHome,
  FaUser,
  FaClipboardList,
  FaNewspaper,
  FaCalendarAlt,
  FaFileAlt,
  FaPlus,
  FaCamera,
  FaEdit,
} from "react-icons/fa";

interface ProfileStatProps {
  icon: ReactNode;
  title: string;
  value: number;
}

interface RecentBooking {
  id: number;
  property: string;
  checkInDate: string;
  checkOutDate: string;
}

interface NewsUpdate {
  id: number;
  title: string;
  content: string;
}

interface PhotoCardProps {
  imageUrl: string;
  title: string;
}

const ListerProfile = () => {
  const [listerData] = useState({
    name: "John Doe",
    propertiesListed: 5,
    upcomingBookings: 3,
    messages: 8,
    newsAndUpdates: [
      {
        id: 1,
        title: "New Feature Released",
        content:
          "Exciting news! We've just released a new feature for better property management.",
      },
      {
        id: 2,
        title: "Upcoming Maintenance",
        content:
          "Scheduled maintenance on the platform on October 15. Please plan accordingly.",
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
    propertyPhotos: [
      {
        id: 1,
        title: "Cozy Apartment",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        title: "Beach House",
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false); // State for profile editing

  const navigateToAddListing = () => {
    // Implement navigation logic
    console.log("Navigate to Add Listing");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <div>
          <FaHome className="mr-3" /> Home
          <FaUser className="mx-3" /> Profile
          <FaClipboardList className="mx-3" /> Your Listings
        </div>
        <button
          onClick={navigateToAddListing}
          className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded flex items-center"
        >
          <FaPlus className="mr-2" /> Add Listing
        </button>
      </nav>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">
          Welcome back, {listerData.name}!
        </h1>

        <div className="flex items-center mb-6">
          <h1 className="text-3xl font-bold flex-grow">
            Welcome back, {listerData.name}!
          </h1>
          <button
            onClick={() => setIsEditingProfile(!isEditingProfile)}
            className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded flex items-center"
          >
            <FaEdit className="mr-2" />{" "}
            {isEditingProfile ? "Save Profile" : "Edit Profile"}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ProfileStat
            icon={<FaHome className="text-4xl text-red-500" />}
            title="Properties Listed"
            value={listerData.propertiesListed}
          />
          <ProfileStat
            icon={<FaClipboardList className="text-4xl text-green-500" />}
            title="Upcoming Bookings"
            value={listerData.upcomingBookings}
          />
          <ProfileStat
            icon={<FaUser className="text-4xl text-blue-500" />}
            title="Messages"
            value={listerData.messages}
          />
        </div>

        <RecentBookings bookings={listerData.recentBookings} />

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">
            Property Photos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {listerData.propertyPhotos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white shadow-md rounded-md overflow-hidden"
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{photo.title}</h3>
                  <button className="text-blue-500 hover:text-blue-700 mt-2 flex items-center">
                    <FaCamera className="mr-2" /> Manage Photos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <NewsAndUpdates updates={listerData.newsAndUpdates} />
      </div>
    </div>
  );
};

const ProfileStat: React.FC<ProfileStatProps> = ({ icon, title, value }) => (
  <div className="p-6 bg-white shadow-md rounded-md flex items-center justify-between transform hover:scale-105 transition-transform">
    <div>{icon}</div>
    <div className="ml-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

const RecentBookings: React.FC<{ bookings: RecentBooking[] }> = ({
  bookings,
}) => (
  <div className="mt-8">
    <h2 className="text-xl font-bold mb-4">Recent Bookings</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="p-6 bg-white shadow-md rounded-md flex items-center justify-between transform hover:scale-105 transition-transform"
        >
          <div>
            <h3 className="text-lg font-semibold">{booking.property}</h3>
            <p className="text-gray-600">
              Check-in: {booking.checkInDate} - Check-out:{" "}
              {booking.checkOutDate}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const NewsAndUpdates: React.FC<{ updates: NewsUpdate[] }> = ({ updates }) => (
  <div className="mt-8">
    <h2 className="text-xl font-bold mb-4">News and Updates</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
