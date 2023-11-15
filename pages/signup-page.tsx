// Import necessary modules from React
import React from 'react';
import Image from 'next/image';
import { FaUserPlus, FaClipboardList } from 'react-icons/fa'; // Import Font Awesome icons
import AppLayout from '../components/AppLayout';

// Define your functional component
const SignupPage: React.FC = () => {
  // Function to handle ListerSignup
  const handleListerSignup = () => {
    // Add logic for ListerSignup
    console.log('ListerSignup clicked');
  };

  // Function to handle UserSignup
  const handleUserSignup = () => {
    // Add logic for UserSignup
    console.log('UserSignup clicked');
  };

  // Return the JSX for the component
  return (
    <AppLayout>
      <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 text-white">
        {/* ListerSignup */}
        <div className="rounded-lg overflow-hidden shadow-md bg-white mx-4 p-6 w-72 transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">
            <span className="flex items-center">
              <FaClipboardList className="mr-2" />
              Lister Signup
            </span>
          </h2>
          <div className="relative h-40 mb-4">
            <Image
              src="/lister-image.jpg" // Add the path to your lister image
              alt="Lister Signup"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-gray-800 mb-4">
            Ready to share your items? Sign up as a Lister and start listing your items for rent.
          </p>
          <button
            onClick={handleListerSignup}
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-white"
          >
            Get Started
          </button>
        </div>

        {/* UserSignup */}
        <div className="rounded-lg overflow-hidden shadow-md bg-white mx-4 p-6 w-72 transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">
            <span className="flex items-center">
              <FaUserPlus className="mr-2" />
              User Signup
            </span>
          </h2>
          <div className="relative h-40 mb-4">
            <Image
              src="/user-image.jpg" // Add the path to your user image
              alt="User Signup"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-gray-800 mb-4">
            Discover and rent items from Listers. Create an account as a User and start exploring.
          </p>
          <button
            onClick={handleUserSignup}
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

// Export the component
export default SignupPage;
