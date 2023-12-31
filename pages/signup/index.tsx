// Import necessary modules from React
import React from 'react';
import Image from 'next/image';
import { FaUserPlus, FaClipboardList } from 'react-icons/fa'; // Import Font Awesome icons
import AppLayout from '../../components/AppLayout';
import { useRouter } from 'next/router'; // Import useRouter

// Define your functional component
const SignupPage: React.FC = () => {
  const router = useRouter(); // Use the useRouter hook to get the router object

  // Function to handle ListerSignup
  const handleListerSignup = () => {
    router.push('/signup/lister');
  };

  // Function to handle UserSignup
  const handleUserSignup = () => {
    router.push('/signup/user');
  };

  // Return the JSX for the component
  return (
    <div className="flex-container bg-gradient-to-r from-blue-700 via-red-500 to-red-700 text-white min-h-screen">
      <AppLayout>
        <div className="relative flex flex-col justify-center items-center p-4">
          {/* Background Decoration */}
          <div className="absolute inset-0 z-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="absolute bottom-0 z-0"
            >
              <path fill="#ffffff" fillOpacity="1" d="M0,96L1440,256L1440,0L0,0Z"></path>
            </svg>
          </div>

          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-white">Sign Up to RentalDai</h1>
            <p className="text-lg text-white">
              Your platform for finding the perfect rental home.
            </p>
          </div>

          {/* Signup Components Section */}
          <div className="flex lg:flex-row md:flex-row flex-col justify-center gap-4">
            {/* ListerSignup */}
            <div className="rounded-lg overflow-hidden shadow-md bg-white p-6 w-72 transition-transform transform hover:scale-105 z-10">
              <h2 className="text-2xl font-bold mb-4 text-red-800">
                <span className="flex items-center">
                  <FaClipboardList className="mr-2" />
                  Lister Signup
                </span>
              </h2>
              <div className="relative h-40 mb-4">
                <Image
                  src="/lister-image.jpg"
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
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-red-500 focus:border-red-500"
              >
                Get Started
              </button>
            </div>

            {/* UserSignup */}
            <div className="rounded-lg overflow-hidden shadow-md bg-white p-6 w-72 transition-transform transform hover:scale-105 z-10">
              <h2 className="text-2xl font-bold mb-4 text-red-800">
                <span className="flex items-center">
                  <FaUserPlus className="mr-2" />
                  User Signup
                </span>
              </h2>
              <div className="relative h-40 mb-4">
                <Image
                  src="/user-image.jpg"
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
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-red-500 focus:border-red-500"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

// Export the component
export default SignupPage;
