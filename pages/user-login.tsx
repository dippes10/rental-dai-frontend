/* eslint-disable react/no-unescaped-entities */
// UserLogin.tsx

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import AppLayout from "../components/AppLayout";
import { useRouter } from "next/router";

interface FormData {
  email: string;
  password: string;
}

const UserLogin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission with formData
    console.log("User Form submitted:", formData);
    // You can add further logic for login here
  };

  const router = useRouter();

  const handleSignUpClick = () => {
    router.push("/user-signup");
  };

  const formFields = [
    { name: "email", label: "Email Address", type: "email", icon: faEnvelope },
    { name: "password", label: "Password", type: "password", icon: faLock },
  ];

  return (
    <AppLayout>
      <section
        className="bg-cover bg-center min-h-screen py-8"
        style={{ backgroundImage: "url('/your-background-image-for-users.jpg')" }}
      >
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="bg-white bg-opacity-90 shadow-md rounded-lg p-10 w-full sm:w-96">
              <h3 className="text-4xl mb-4 text-center font-bold text-gray-800">
                User Login
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {formFields.map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700 flex items-center">
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
                        className="border-2 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-blue-500"
                        placeholder={field.label}
                        required
                      />
                    </div>
                  </div>
                ))}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-500 text-white py-3 rounded-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out focus:outline-none"
                  >
                    Login as a User
                  </button>
                </div>
              </form>
              <p className="mt-4 text-center">
                Don't have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={handleSignUpClick}
                >
                  Sign up here
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default UserLogin;
