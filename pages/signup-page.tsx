// Import necessary modules from React
import React from 'react';
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
      <div className="flex h-screen">
        {/* Left side (ListerSignup) */}
        <div className="w-1/2 bg-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-4">Lister Signup</h2>
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

        {/* Right side (UserSignup) */}
        <div className="w-1/2 bg-gray-300 p-8">
          <h2 className="text-2xl font-bold mb-4">User Signup</h2>
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
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mr-4">
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
