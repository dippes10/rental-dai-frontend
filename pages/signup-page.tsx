// Import necessary modules from React
import React from 'react';
import Image from 'next/image';
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
      <div className="flex h-screen justify-center items-center bg-gray-100">
        {/* ListerSignup */}
        <div className="rounded-lg overflow-hidden shadow-md bg-white mx-4 p-8 w-1/2 animate-fadeInLeft">
          <h2 className="text-2xl font-bold mb-4">Lister Signup</h2>
          <div className="relative h-32 mb-4">
            <Image
              src="/lister-image.jpg" // Add the path to your lister image
              alt="Lister Signup"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-gray-600">
            Provide information and sign up as a Lister to list your items for rent.
          </p>
          <button
            onClick={handleListerSignup}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
          >
            Lister Signup
          </button>
        </div>

        {/* UserSignup */}
        <div className="rounded-lg overflow-hidden shadow-md bg-white mx-4 p-8 w-1/2 animate-fadeInRight">
          <h2 className="text-2xl font-bold mb-4">User Signup</h2>
          <div className="relative h-32 mb-4">
            <Image
              src="/user-image.jpg" // Add the path to your user image
              alt="User Signup"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-gray-600">
            Create an account as a User to browse and rent items listed by Listers.
          </p>
          <button
            onClick={handleUserSignup}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full"
          >
            User Signup
          </button>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="flex justify-center mt-8">
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full mr-4">
          Lister Signup
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
          User Signup
        </button>
      </div>
    </AppLayout>
  );
};

// Export the component
export default SignupPage;
