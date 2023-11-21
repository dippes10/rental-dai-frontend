import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

const ListerForm: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [details, setDetails] = useState("");
  const [checked, setChecked] = useState(true);

  const [nameError, setNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [imageUrlError, setImageUrlError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChecked = () => setChecked(!checked);

  const handleSubmit = (e: React.FormEvent) => {
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

    if (!imageUrl.trim()) {
      setImageUrlError("Please enter a valid image URL.");
      return;
    }

    // If all validations pass, you can proceed with form submission
    // For demonstration, I'll just display a success message and clear the form
    setSuccessMessage("Form submitted successfully!");
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setAddress("");
    setImageUrl("");
    setDetails("");
    setChecked(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 bgListerForm">
      <div className="relative w-full sm:w-96 md:w-96 lg:w-120 xl:w-120 p-100">
        {" "}
        {/* Change lg:w-120 and xl:w-120 to a specific width value */}
        {/* Increased width to lg:w-120 and xl:w-120 */}
        {/* Header box with purple to white gradient */}
        <div className="bg-gradient-to-r from-purple-500 to-white rounded-md shadow-md p-6 mb-2">
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
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-purple-300"
                    placeholder="Elegant Studio"
                  />
                  {nameError && (
                    <p className="text-red-500 text-sm mt-1">{nameError}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-purple-300"
                    placeholder="123 Maple Avenue, Townsville"
                  />
                  {addressError && (
                    <p className="text-red-500 text-sm mt-1">{addressError}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Image 
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-purple-300"
                    placeholder="https://source.unsplash.com/800x600/?apartment"
                  />
                  {imageUrlError && (
                    <p className="text-red-500 text-sm mt-1">{imageUrlError}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Details
                </label>
                <div className="relative">
                  <textarea
                    name="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full p-1 border rounded-md focus:outline-none focus:ring focus:border-purple-300"
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
                className="w-full px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-md focus:outline-none focus:ring focus:border-purple-300"
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
  );
};

export default ListerForm;
