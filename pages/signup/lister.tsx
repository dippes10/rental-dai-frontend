import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import AppLayout from "../../components/utils/AppLayout";
import router from "next/router";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  user_type: string;
}

const UserSignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    user_type: "lister",
  });

  // Add a state variable for mobile view
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  // Function to check if the screen size is mobile
  const checkIsMobileView = () => {
    setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with your preferred options
  }, []);

  // Add an event listener to check for mobile view on component mount
  useEffect(() => {
    checkIsMobileView();
    window.addEventListener("resize", checkIsMobileView);
    return () => {
      window.removeEventListener("resize", checkIsMobileView);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, user_type: "lister" }),
      });

      if (response.ok) {
        // Signup successful, perform further actions if needed
        console.log('User signed up successfully');
        router.push("/login/lister");
      } else {
        // Handle signup error
        console.error('Signup failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const formFieldsRow1 = [
    { name: "firstName", label: "First Name", type: "text", icon: faUser },
    { name: "lastName", label: "Last Name", type: "text", icon: faUser },
    { name: "email", label: "Email Address", type: "email", icon: faEnvelope },
  ];

  const formFieldsRow2 = [
    { name: "phone", label: "Phone Number", type: "phone", icon: faPhone },
    { name: "password", label: "Password", type: "password", icon: faLock },
    { name: "confirmPassword", label: "Confirm Password", type: "password", icon: faLock },
  ];

  return (
    <AppLayout>
      <section
        className={`bg-cover bg-center min-h-screen py-8 bgLogin ${
          isMobileView ? "flex flex-col" : "flex items-center"
        }`}
        style={{ backgroundImage: "url('/bg-login.jpeg')" }}
      >
        <div className="max-w-screen-lg mx-auto px-4 flex flex-col sm:flex-row items-center">
          {/* Form */}
          <div
            className={`bg-white bg-opacity-90 shadow-md rounded-lg p-6 w-full ${
              isMobileView ? "mb-4" : "sm:w-96 mr-8"
            }`}
            data-aos={isMobileView ? "fade-up" : "fade-right"}
          >
            <h3 className="text-4xl mb-4 text-center font-bold text-gray-800">
              Sign Up as a <span className="text-red-500">Lister</span>
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {isMobileView ? (
                <>
                  {/* Form Fields Row 1 */}
                  {formFieldsRow1.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 items-center">
                        <FontAwesomeIcon icon={field.icon} className="mr-2" />
                        {field.label}
                      </label>
                      <div className="relative">
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof FormData]}
                          onChange={handleChange}
                          className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-red-500"
                          placeholder={field.label}
                          required
                        />
                      </div>
                    </div>
                  ))}
                  {/* Form Fields Row 2 */}
                  {formFieldsRow2.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 items-center">
                        <FontAwesomeIcon icon={field.icon} className="mr-2" />
                        {field.label}
                      </label>
                      <div className="relative">
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof FormData]}
                          onChange={handleChange}
                          className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-red-500"
                          placeholder={field.label}
                          required
                        />
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {/* Form Fields Row 1 */}
                  {formFieldsRow1.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 items-center">
                        <FontAwesomeIcon icon={field.icon} className="mr-2" />
                        {field.label}
                      </label>
                      <div className="relative">
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof FormData]}
                          onChange={handleChange}
                          className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-red-500"
                          placeholder={field.label}
                          required
                        />
                      </div>
                    </div>
                  ))}
                  {/* Form Fields Row 2 */}
                  {formFieldsRow2.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 items-center">
                        <FontAwesomeIcon icon={field.icon} className="mr-2" />
                        {field.label}
                      </label>
                      <div className="relative">
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof FormData]}
                          onChange={handleChange}
                          className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-red-500"
                          placeholder={field.label}
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-500 text-white py-3 rounded-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out focus:outline-none"
                >
                  Sign Up as a Lister
                </button>
              </div>
              <div className="text-center text-gray-600 mt-4">
                Or sign up with
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
                <button
                  type="button"
                  className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </button>
                <button
                  type="button"
                  className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </button>
              </div>
            </form>
          </div>

          {/* Image Container with Description */}
          <div
            className={`bg-white bg-opacity-90 shadow-md rounded-lg p-6 w-full ${
              isMobileView ? "mb-4" : "sm:w-96 ml-8"
            }`}
            data-aos={isMobileView ? "fade-up" : "fade-left"}
          >
            <h3 className="text-2xl mb-4 font-semibold text-gray-800">
              Why Join Us?
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              volutpat justo eget urna tincidunt, sit amet blandit libero
              fermentum.
            </p>
            <img
              src="https://images.unsplash.com/photo-1460467820054-c87ab43e9b59?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Join Us"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default UserSignUp;
