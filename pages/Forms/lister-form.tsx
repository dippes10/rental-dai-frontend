import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import AppLayout from "../../components/AppLayout";

const ListerForm: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [details, setDetails] = useState("");
  const [checked, setChecked] = useState(true);

  const [nameError, setNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [imageUrlError, setImageUrlError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChecked = () => setChecked(!checked);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset previous error messages
    setNameError("");
    setAddressError("");
    setImageUrlError("");

    // Perform validation
    if (!name.trim()) {
      setNameError("Please enter a valid name.");
      return;
    }

    if (!address.trim()) {
      setAddressError("Please enter a valid address.");
      return;
    }

    if (!imageFile) {
      setImageUrlError("Please upload an image.");
      return;
    }

    // Additional logic for file upload, e.g., using FormData
    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("image", imageFile);
    formData.append("details", details);
    formData.append("agreedToTerms", checked.toString());

    try {
      // You can send the formData to your server or handle it as needed
      // For demonstration, I'll just display a success message
      setSuccessMessage("Form submitted successfully!");
      clearForm();
    } catch (error) {
      // Handle any errors that occur during the submission
      console.error("Error submitting form:", error);
    }
  };

  const clearForm = () => {
    setName("");
    setAddress("");
    setImageFile(null);
    setDetails("");
    setChecked(true);
  };

  return (
    <AppLayout>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 bgListerForm" style={{ minHeight: "100vh"}} >
      <div className="w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-4/12 p-4">
        <div className="bg-gradient-to-r from-red-500 to-white rounded-md shadow-md p-6 mb-2 w-full">
          <div className="flex flex-col items-center mb-4">
            <h4 className="text-white text-2xl font-medium mb-2">
              List Your Property
            </h4>
            <p className="text-sm text-black">
              Provide details about your property
            </p>
          </div>
        </div>
        {/* Form box */}
        <div className="bg-white rounded-md shadow-md p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Form inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-red-300"
                    placeholder="Elegant Studio"
                  />
                  {nameError && (
                    <p className="text-red-500 text-sm mt-1">{nameError}</p>
                  )}
                </div>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-red-300"
                    placeholder="123 Maple Avenue, Townsville"
                  />
                  {addressError && (
                    <p className="text-red-500 text-sm mt-1">{addressError}</p>
                  )}
                </div>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Image
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="imageFile"
                    onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                    accept="image/*"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-red-300"
                  />
                  {imageUrlError && (
                    <p className="text-red-500 text-sm mt-1">{imageUrlError}</p>
                  )}
                </div>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Details
                </label>
                <div className="relative">
                  <textarea
                    name="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full p-1 border rounded-md focus:outline-none focus:ring focus:border-red-300"
                    placeholder="Phone Number, Room Description, Water Availability, etc."
                    rows={6}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <button
                type="button"
                className={`flex items-center space-x-2 focus:outline-none ${
                  checked ? "text-green-500" : "text-red-500"
                }`}
                onClick={handleChecked}
              >
                <FontAwesomeIcon
                  icon={checked ? faCheckCircle : faExclamationCircle}
                  className="h-6 w-6"
                />
                <span className="text-sm font-medium">
                  {checked ? "Agreed to Terms" : "Not Agreed"}
                </span>
              </button>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-gradient-to-r from-red-500 to-red-700 rounded-md focus:outline-none focus:ring focus:border-red-300"
              >
                Send Message
              </button>
            </div>
            {successMessage && (
              <div className="mt-4 text-green-500 text-center">
                {successMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
    </AppLayout>
  );
};

export default ListerForm;
