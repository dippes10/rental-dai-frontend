/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import AppLayout from "../../components/utils/AppLayout";
import NextImage from "next/image"; // Import next/image
import { FaGithub, FaFacebook, FaGoogle } from "react-icons/fa"; // Import icons
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function SignInBasic() {
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with your preferred options
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/user-Signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}), 
      });

      if (response.ok) {
        
        const data = await response.json();

      // Check if user_type is 'user'
      if (data.user && data.user.user_type === 'lister') {
        localStorage.setItem("access_token", data.access_token);
        setSuccessMessage('Sign-in successful as lister');
        setErrorMessage('');
        router.push("/profile/lister-profile");
      } else if (data.user && data.user.user_type === 'user') {
        // Handle the case where user_type is 'lister'
        setErrorMessage('Sign-in restricted for users.');
        setSuccessMessage('');
      } else {
        // Handle other cases
        setErrorMessage('Invalid user type');
        setSuccessMessage('');
      }
    } else {
      setErrorMessage('Invalid credentials');
      setSuccessMessage('');
    }
  } catch (error) {
    console.error('Error during sign-in:', error);
    setErrorMessage('Error during sign-in');
    setSuccessMessage('');
  }
  };

  return (
    <AppLayout>
      <div
        className="flex justify-center items-center bgLogin"
        data-aos="fade-up" // Add fade-up animation
      >
        <div className="relative w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 p-8">
          {/* Header box with red to white gradient */}
          <div
            className="bg-gradient-to-r from-red-500 to-white rounded-md shadow-md p-6 mb-2"
            data-aos="fade-in" // Add fade-in animation
          >
            <div className="flex flex-col items-center mb-4">
              <NextImage
                src="/favicon.png" // Replace with your logo
                alt="Home Rental Logo"
                width={120} // Set the width and height according to your design
                height={120}
                className="mb-4" // Add margin-bottom to create space
              />
              <div>
                <h4 className="text-white text-2xl font-medium mb-2">Sign in as Lister</h4>
              </div>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://github.com/dippes10/rental-dai-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={24}
                    className="text-gray-800 cursor-pointer hover:text-gray-500"
                  />
                </a>
                <a
                  href="https://github.com/dippes10/rental-dai-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    size={24}
                    className="text-gray-800 cursor-pointer hover:text-blue-800"
                  />
                </a>
                <a
                  href="https://github.com/dippes10/rental-dai-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGoogle
                    size={24}
                    className="text-gray-800 cursor-pointer hover:text-red-800"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Form box */}
          <div
            className="bg-white rounded-md shadow-md p-8"
            data-aos="fade-up" // Add fade-up animation
          >
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
                  className="w-full p-3 border-2 border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  className="w-full p-3 border-2 border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-red-500 to-blue-200 text-white py-3 hover:shadow-lg px-4 rounded-full"
                >
                  Sign in
                </button>
              </div>
              {successMessage && (
                <div className="text-green-600 text-center">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="text-red-600 text-center">{errorMessage}</div>
              )}
              <div className="text-center">
                <p className="text-sm text-gray-800">
                  Don't have an account?{" "}
                  <span
                    className="text-red-500 cursor-pointer hover:underline"
                    onClick={() => router.push("/profile/lister-profile")}
                  >
                    Sign up here
                  </span>
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
