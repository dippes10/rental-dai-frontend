import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import AppLayout from "../components/AppLayout";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const ListerSignUp: React.FC = () => {
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
    console.log("Form submitted:", formData);
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
    <AppLayout>
    <section
      className="bg-cover bg-center min-h-screen py-8"
      style={{ backgroundImage: "url('/your-background-image.jpg')" }}
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="bg-white bg-opacity-90 shadow-md rounded-lg p-10 w-full sm:w-96">
            <h3 className="text-4xl mb-4 text-center font-bold text-gray-800">Lister Sign Up</h3>
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
                      className="border-2 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-red-500"
                      placeholder={field.label}
                      required
                    />
                  </div>
                </div>
              ))}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-500 text-white py-3 rounded-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out focus:outline-none"
                >
                  Sign Up as a Lister
                </button>
              </div>
            </form>
          </div>
        </div>
        <h3 className="text-2xl font-bold mt-6 mb-4 text-white">Our Location</h3>
        <div className="h-64 w-full py-6">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.083251684768!2d85.30643297603618!3d27.714715725165423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fc9a83c0cd%3A0xc0495456663927d4!2sNational%20College%20of%20Computer%20Studies!5e0!3m2!1sen!2snp!4v1699707724747!5m2!1sen!2snp"
            width="100%"
            height="120%"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </section>
    </AppLayout>
  );
};

export default ListerSignUp;