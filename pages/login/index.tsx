// Import necessary modules from React
import React from "react";
import Image from "next/image";
import AppLayout from "../../components/AppLayout";
import { useRouter } from "next/router";

// Define your functional component
const HomePage: React.FC = () => {
  const router = useRouter();

  const handleUserLogin = () => {
    router.push("/login/user");
  };

  const handleListerLogin = () => {
    router.push("/login/lister");
  };

  return (
    <div className="bg-gradient-to-r from-red-300 via-red-500 to-red-700 text-white">
      <AppLayout>
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Introduction Section */}
          <div className="text-center mb-8">
            <h1 className="text-white font-bold mb-4">Welcome to Rental Dai</h1>
            <p className="text-lg">
              Your platform for finding the perfect rental home.
            </p>
          </div>

          <div>
            {/* Components Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mb-12">
              {/* Component 1: House Listing */}
              <button
                onClick={handleListerLogin}
                className="relative group p-6 bg-white rounded-md shadow-md text-center transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-white"
              >
                <h2 className="text-xl font-bold mb-4">House Listings</h2>
                <div className="relative h-40 mb-4">
                  <Image
                    src="/lister-image.jpg"
                    alt="House Listing"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <p className="mt-4">
                  Explore a wide range of rental houses available for you.
                </p>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <p className="text-white font-bold">Sign In as Lister</p>
                </div>
              </button>

              {/* Component 2: User Reviews */}
              <button
                onClick={handleUserLogin}
                className="relative group p-6 bg-white rounded-md shadow-md text-center transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-white"
              >
                <h2 className="text-xl font-bold mb-4">User Reviews</h2>
                <div className="relative h-40 mb-4">
                  <Image
                    src="/user-image.jpg"
                    alt="User Reviews"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <p className="mt-4">
                  Read reviews from other users to make informed decisions.
                </p>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <p className="text-white font-bold">Sign In as User</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

// Export the component
export default HomePage;
