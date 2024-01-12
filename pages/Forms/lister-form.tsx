import React, { useState } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHome,
  FaInfo,
  FaBed,
  FaBath,
  FaDollarSign,
} from "react-icons/fa";

import AppLayout from "../../components/AppLayout";
import GeocodingComponent from "../../components/mapbox/geocoding";

const ListerForm: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState<File[]>([]);
  const [details, setDetails] = useState("");
  const [checked, setChecked] = useState(false);
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [priceError, setPriceError] = useState("");

  const [nameError, setNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [imageUrlError, setImageUrlError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

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

    // Additional validation for image links

    // Additional logic for handling image links
    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("price", price);
    formData.append("bedrooms", bedrooms.toString());
    formData.append("bathrooms", bathrooms.toString());
    formData.append("details", details);
    formData.append("latitude", latitude?.toString() || "");
    formData.append("longitude", longitude?.toString() || "");
    formData.append("agreedToTerms", checked.toString());
    // if (image.length > 0) {
    //   console.log("image", image)
    //   console.log("image", image[0])
    //   formData.append("file", image[0]);
    // }
    for (let i = 0; i < image.length; i++) {
      formData.append(`files[${i}]`, image[i]);
    }
    console.log("formData", formData);
    formData.forEach((value, key) => {
      console.log("key", key);
      console.log("value", value);
    });

    try {
      // You can send the formData to your server or handle it as needed
      // For demonstration, I'll just display a success message

      const token = localStorage.getItem("access_token");
      const response = await fetch("http://localhost:8080/api/properties", {
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
        body: formData,
      });
      if (response.ok) {
        setSuccessMessage("Form submitted successfully!");
        clearForm();
        const responseData = await response.json();
        console.log(responseData); // Log success response from the backend
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error); // Log error response from the backend
      // Handle errors or show an error message to the user
    }
  };

  const incrementBedrooms = () => setBedrooms(bedrooms + 1);
  const decrementBedrooms = () => setBedrooms(Math.max(1, bedrooms - 1));
  const incrementBathrooms = () => setBathrooms(bathrooms + 1);
  const decrementBathrooms = () => setBathrooms(Math.max(1, bathrooms - 1));

  const handleMapClick = (event: any) => {
    setLatitude(event.lngLat[1]);
    setLongitude(event.lngLat[0]);
  };

  const clearForm = () => {
    setName("");
    setAddress("");
    setImage([]);
    setDetails("");
    setChecked(false); // Reset to "Not Agreed"
    setLatitude(null);
    setLongitude(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log(files);
    if (files) {
      const imageFiles = Array.from(files);
      console.log(imageFiles);
      setImage(imageFiles); // Set your state to store multiple images
    }
  };

  return (
    <AppLayout>
      <div
        className="flex justify-center items-center min-h-screen bg-gray-100 bgListerForm"
        style={{ minHeight: "100vh" }}
      >
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
                      className="w-full p-3 border-2 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
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
                      className="w-full p-3 border-2 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                      placeholder="123 Maple Avenue, Townsville"
                    />
                    {addressError && (
                      <p className="text-red-500 text-sm mt-1">
                        {addressError}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <div className="relative flex items-center">
                    <FaDollarSign className="absolute ml-3" />
                    <input
                      type="text"
                      name="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="pl-10 p-3 border-2 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                      placeholder="Price"
                    />
                  </div>
                  {priceError && (
                    <p className="text-red-500 text-sm mt-1">{priceError}</p>
                  )}
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Image
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="image"
                      onChange={(e) => handleFileChange(e)}
                      className="w-full p-3 border-2 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                      placeholder="https://example.com/image.jpg"
                      multiple
                    />
                    {imageUrlError && (
                      <p className="text-red-500 text-sm mt-1">
                        {imageUrlError}
                      </p>
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
                      className="w-full p-1 border-2 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                      placeholder="Phone Number, Room Description, Water Availability, etc."
                      rows={6}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col space-y-4 mt-8">
                  <div className="flex items-center">
                    <FaBed className="mr-2 text-xl" />
                    <button
                      onClick={decrementBedrooms}
                      className="px-2 bg-gray-200 hover:bg-gray-300 rounded-full text-lg font-bold">
                      -
                    </button>
                    <input
                      type="text"
                      readOnly
                      value={bedrooms}
                      className="w-12 text-center mx-2 border-2 border-gray-300 rounded-md"/>
                    <button
                      onClick={incrementBedrooms}
                      className="px-2 bg-gray-200 hover:bg-gray-300 rounded-full text-lg font-bold">
                      +
                    </button>
                    <span className="ml-2 text-sm md:text-base">Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <FaBath className="mr-2 text-xl" />
                    <button
                      onClick={decrementBathrooms}
                      className="px-2 bg-gray-200 hover:bg-gray-300 rounded-full text-lg font-bold">
                      -
                    </button>
                    <input
                      type="text"
                      readOnly
                      value={bathrooms}
                      className="w-12 text-center mx-2 border-2 border-gray-300 rounded-md"
                    />
                    <button
                      onClick={incrementBathrooms}
                      className="px-2 bg-gray-200 hover:bg-gray-300 rounded-full text-lg font-bold"
                    >
                      +
                    </button>
                    <span className="ml-2 text-sm md:text-base">Bathrooms</span>
                  </div>
                </div>
              </div>
              <GeocodingComponent
                onLatitudeChange={setLatitude}
                onLongitudeChange={setLongitude}
              />

              <div className="flex items-center mt-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox border-2 border-red-500 focus:outline-none focus:ring-red-500 focus:border-red-500"
                    checked={checked}
                    onChange={handleChecked}
                  />
                  <span className="text-sm font-medium">
                    I agree to the terms and conditions
                  </span>
                </label>
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
