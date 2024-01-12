import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import AppLayout from "../../components/AppLayout";
import router from "next/router";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  user_type: string;
}

const UserSignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    user_type: "lister",
  });

  
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
        body: JSON.stringify({...formData, user_type: "lister"}), 
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
  
  const formFields = [
    { name: "firstName", label: "First Name", type: "text", icon: faUser },
    { name: "lastName", label: "Last Name", type: "text", icon: faUser },
    { name: "email", label: "Email Address", type: "email", icon: faEnvelope },
    { name: "phone", label: "Phone Number", type: "phone", icon: faPhone },
    { name: "password", label: "Password", type: "password", icon: faLock },
    { name: "confirmPassword", label: "Confirm Password", type: "password", icon: faLock },
  ];

  return (
    <AppLayout>
    <section
      className="bg-cover bg-center min-h-screen py-8 bgLogin"
      style={{ backgroundImage: "url('/bg-login.jpeg')" }}
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="bg-white bg-opacity-90 shadow-md rounded-lg p-10 w-full sm:w-96">
            <h3 className="text-4xl mb-4 text-center font-bold text-gray-800">sign up  as lister</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {formFields.map((field) => (
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
                  Sign Up  as a lister
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </AppLayout>
  );
};

export default UserSignUp;
