import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faPhone,
  faDollarSign,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import AppLayout from "../../components/AppLayout";
import router from "next/router";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  user_type: string;
  longitude: string;
  latitude: string;
  preferredPrice: string;
}

const UserSignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    user_type: "user",
    longitude: "",
    latitude: "",
    preferredPrice: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, user_type: "user" }),
      });

      if (response.ok) {
        // Signup successful, perform further actions if needed
        console.log("User signed up successfully");
        router.push("/login/user");
      } else {
        // Handle signup error
        console.error("Signup failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const formFields = [
    { name: "firstName", label: "First Name", type: "text", icon: faUser },
    { name: "lastName", label: "Last Name", type: "text", icon: faUser },
    { name: "email", label: "Email Address", type: "email", icon: faEnvelope },
    { name: "phone", label: "Phone Number", type: "phone", icon: faPhone },
    { name: "password", label: "Password", type: "password", icon: faLock },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      icon: faLock,
    },
    {
      name: "longitude",
      label: "Longitude",
      type: "text",
      icon: faMapMarkerAlt,
    },
    { name: "latitude", label: "Latitude", type: "text", icon: faMapMarkerAlt },
    {
      name: "preferredPrice",
      label: "Preferred Price",
      type: "number",
      icon: faDollarSign,
    },
  ];

  return (
    <AppLayout>
      <section className="min-h-screen py-8 bg-gray-100 bgSignup">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column for the form */}
          <div>
            <div className="bg-white bg-opacity-90 shadow-md rounded-lg p-10">
              <h3 className="text-4xl mb-4 text-center font-bold text-gray-800">
                User Sign Up
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-2">
                  {formFields.map((field) => (
                    <div key={field.name} className="w-full md:w-1/2 px-2 mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label}
                      </label>
                      <div className="relative">
                        <FontAwesomeIcon
                          icon={field.icon}
                          className="absolute left-2 top-3 text-gray-500"
                        />
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof FormData]}
                          onChange={handleChange}
                          className="pl-10 border-2 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-red-500 focus:border-red-500"
                          placeholder={field.label}
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-red-500 to-red-500 text-white py-3 rounded-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out focus:outline-none"
                  >
                    {isLoading ? "Signing Up..." : "Sign Up as a User"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Column for the image, description, and logo */}
          <div>
            <div
              className="h-full bg-cover bg-center rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('/your-image.jpg')",
                backgroundSize: "cover",
                position: "relative",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center px-6 contact-us-form">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-1 text-white">
                    Contact Information
                  </h3>
                  <p className="opacity-80 mb-3 text-white">
                    Fill up the form and become a part of Rental-Dai Family
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default UserSignUp;
