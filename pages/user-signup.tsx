import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const UserSignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission with formData
    console.log("User Form submitted:", formData);
    // You can add further logic for form submission here
  };

  const formFields = [
    { name: "firstName", label: "First Name", type: "text", icon: faUser },
    { name: "lastName", label: "Last Name", type: "text", icon: faUser },
    { name: "email", label: "Email Address", type: "email", icon: faEnvelope },
    { name: "password", label: "Password", type: "password", icon: faLock },
    { name: "confirmPassword", label: "Confirm Password", type: "password", icon: faLock },
  ];

  return (
    <section
      className="bg-cover bg-center min-h-screen py-8"
      style={{ backgroundImage: "url('/your-background-image-for-users.jpg')" }}
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="bg-white bg-opacity-90 shadow-md rounded-lg p-10 w-full sm:w-96">
            <h3 className="text-4xl mb-4 text-center font-bold text-gray-800">User Sign Up</h3>
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
                  Sign Up as a User
                </button>
              </div>
            </form>
          </div>
        </div>
        <h3 className="text-2xl font-bold mt-6 mb-4 text-white">User Location</h3>
        <div className="h-64 w-full py-6">
          {/* User-specific location or map */}
        </div>
      </div>
    </section>
  );
};

export default UserSignUp;
