import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import AppLayout from "../../components/AppLayout";
import GeocodingComponent from "../../components/mapbox/geocoding";

const ListerForm: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState<string>("");
  const [details, setDetails] = useState("");
  const [checked, setChecked] = useState(false);

  const [nameError, setNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [imageUrlError, setImageUrlError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const handleLatitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setLatitude(isNaN(value) ? null : value);
  };

  const handleLongitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setLongitude(isNaN(value) ? null : value);
  };

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
    if (!image.trim()) {
      setImageUrlError("Please enter at least one image link.");
      return;
    }

    // Additional logic for handling image links
    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("imageUrls", image);
    formData.append("details", details);
    formData.append("latitude", latitude?.toString() || "");
    formData.append("longitude", longitude?.toString() || "");
    formData.append("agreedToTerms", checked.toString());

    try {
      // You can send the formData to your server or handle it as needed
      // For demonstration, I'll just display a success message
      const response = await fetch("http://localhost:8080/add_property", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          address,
          image,
          details,
          latitude,
          longitude,
          agreedToTerms: checked,
        }),
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

  const handleMapClick = (event: any) => {
    setLatitude(event.lngLat[1]);
    setLongitude(event.lngLat[0]);
  };

  const clearForm = () => {
    setName("");
    setAddress("");
    setImage("");
    setDetails("");
    setChecked(false); // Reset to "Not Agreed"
    setLatitude(null);
    setLongitude(null);
  };
  
  const handleFileChange = (e:any) => {
    const file = e.target.files?.[0];
    // // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     if (reader.result !== null && typeof reader.result === 'string') {
    //       setImage(reader.result);
    //     } 
    //   };
    //   reader.readAsDataURL(file);
     
    // }
    console.log(image)
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
                    Image 
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="image"
                      value={image}
                      onChange={(e) => handleFileChange(e)}
                      className="w-full p-3 border-2 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                      placeholder="https://example.com/image.jpg"
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
              </div>
                  <GeocodingComponent/>

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
