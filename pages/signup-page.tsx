// Import necessary modules from React
import React from 'react';
import Image from 'next/image';
import { FaUserPlus, FaClipboardList } from 'react-icons/fa'; // Import Font Awesome icons
import AppLayout from '../components/AppLayout';
import router from 'next/router';

// Define your functional component
const SignupPage: React.FC = () => {

  const  handleListerSignup= () => {
    router.push("/lister-signup");
    // setShowMenu(false);
  };

  // Function to handle UserSignup
  const handleUserSignup = () => {
    // Add logic for UserSignup
    router.push("user-signup");
    // setShowMenu(false);
  };

  // Return the JSX for the component
  return (
    <AppLayout>
      <div className=" relative flex min-h-screen overflow-hidden justify-center items-center bg-gradient-to-r from-red-500 via-red-700 to-red-900 text-white">
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 z-0"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L1440,256L1440,0L0,0Z"
            ></path>
          </svg>
        </div>

        {/* ListerSignup */}
        <div className="rounded-lg overflow-hidden shadow-md bg-white mx-4 p-6 w-72 transition-transform transform hover:scale-105 z-10">
          <h2 className="text-3xl font-bold mb-4 text-red-800">
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
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-white"
          >
            Get Started
          </button>
        </div>

        {/* UserSignup */}
        <div className="rounded-lg overflow-hidden shadow-md bg-white mx-4 p-6 w-72 transition-transform transform hover:scale-105 z-10">
          <h2 className="text-3xl font-bold mb-4 text-red-800">
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
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-white"
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
function setShowMenu(arg0: boolean) {
  throw new Error('Function not implemented.');
}

