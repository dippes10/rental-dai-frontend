/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import AppLayout from "../components/AppLayout";
import NextImage from "next/image"; // Import next/image
import { FaGithub, FaFacebook, FaGoogle } from "react-icons/fa"; // Import icons

function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <AppLayout>
      <div className="flex justify-center items-center h-screen bgLogin">
        <div className="relative w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 p-8">
          {/* Header box with purple to white gradient */}
          <div className="bg-gradient-to-r from-purple-500 to-white rounded-md shadow-md p-6 mb-2">
            <div className="flex flex-col items-center mb-4">
              <NextImage
                src="/next.svg" // Replace with your logo
                alt="Rental Dai Logo"
                width={96} // Set the width and height according to your design
                height={96}
                className="mb-4" // Add margin-bottom to create space
              />
              <div>
                <h4 className="text-white text-2xl font-medium mb-2">Sign in</h4>
              </div>
              <div className="flex space-x-4 mt-2">
                <a
                  href="your-github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={24}
                    className="text-gray-800 cursor-pointer hover:text-gray-600"
                  />
                </a>
                <a
                  href="your-facebook-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    size={24}
                    className="text-gray-800 cursor-pointer hover:text-blue-600"
                  />
                </a>
                <a
                  href="your-gmail-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGoogle
                    size={24}
                    className="text-gray-800 cursor-pointer hover:text-red-600"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Form box */}
          <div className="bg-white rounded-md shadow-md p-8">
            <form className="space-y-6">
              {/* Form inputs */}
              <div>
                <label htmlFor="email" className="sr-only text-gray-800">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only text-gray-800">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleSetRememberMe}
                  className="mr-2"
                />
                <label
                  htmlFor="rememberMe"
                  onClick={handleSetRememberMe}
                  className="cursor-pointer text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>
              <div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-white text-white py-3 px-4 rounded-full">
                  Sign in
                </button>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-800">
                  Don't have an account?{" "}
                  <a
                    href="/authentication/sign-up/cover"
                    className="text-purple-500 font-medium"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full absolute z-2 bottom-8">
        {/* Footer code here (if you have an alternative component) */}
      </div>
    </AppLayout>
  );
}

export default SignInBasic;
