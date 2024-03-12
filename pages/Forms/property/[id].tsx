import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaBath, FaBed, FaDollarSign, FaUpload } from "react-icons/fa";
import AppLayout from "../../../components/utils/AppLayout";
import { toast, Toaster } from "sonner";
import GeocodingComponent from "../../../components/mapbox/geocoding";

// Define a type for the errors state
interface ErrorState {
  form?: string;
}

const UpdatePropertyForm = () => {
  const router = useRouter();
  const { id:propertyId } = router.query;
  console.log(propertyId);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    images: [] as File[], // Correct typing for an array of File objects
    details: "",
    checked: false,
    price: "",
    bedrooms: 1,
    bathrooms: 1,
    latitude: null as number | null,
    longitude: null as number | null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorState>({});
  const [nameError, setNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [imageUrlError, setImageUrlError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
const [priceError, setPriceError] = useState("");
const [bedrooms, setBedrooms] = useState(1);
const [bathrooms, setBathrooms] = useState(1);

  useEffect(() => {
    if (!propertyId) return;
    const fetchPropertyData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:8080/api/properties/${propertyId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        if (!response.ok) throw new Error('Failed to fetch property data');
        const property = await response.json();
        setFormData({
          ...formData,
          name: property.name,
          address: property.address,
          details: property.description,
          checked: property.checked === "true",
          price: property.price,
          bedrooms: property.bedrooms,
          bathrooms: property.bathrooms,
          latitude: property.latitude,
          longitude: property.longitude,
        });
      } catch (error) {
        console.error("Error fetching property data:", error);
        toast.error("Failed to fetch property data.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPropertyData();
  }, [propertyId]); // Removed formData from dependencies


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, images: Array.from(e.target.files) });
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file" && files) {
      setFormData({ ...formData, images: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const updateFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'images') {
        (value as File[]).forEach(file => updateFormData.append('images', file));
      } else {
        // Check for null values explicitly
        if (value !== null) {
          updateFormData.append(key, value.toString());
        }
      }
    });

    try {
      const response = await fetch(`http://localhost:8080/api/properties/${propertyId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: updateFormData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update property');
      }

      toast.success("Property updated successfully!");
      router.reload();
    } catch (error) {
      let errorMessage = "An unexpected error occurred";
      if (error instanceof Error) errorMessage = error.message;
      console.error("Error updating property:", errorMessage);
      toast.error(`Failed to update property: ${errorMessage}`);
      setErrors({ form: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  const incrementBedrooms = (e: any) => {
    e.preventDefault();
    setBedrooms(bedrooms + 1);
  };

  const decrementBedrooms = (e: any) => {
    e.preventDefault();
    setBedrooms(Math.max(1, bedrooms - 1));
  };

  const incrementBathrooms = (e: any) => {
    e.preventDefault();
    setBathrooms(bathrooms + 1);
  };

  const decrementBathrooms = (e: any) => {
    e.preventDefault();
    setBathrooms(Math.max(1, bathrooms - 1));
  };
  const handleBUttonClick = () => {
    router.push("/profile/lister-profile");
    // <Toaster  richColors />
    toast.success("Property added successfully!");

  };
  return (
    <AppLayout>
    <Toaster />
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
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <div className="bg-white rounded-md shadow-md p-8">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="space-y-4">
        <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border-2 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
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
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full p-3 border-2 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
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
                  <div className="relative p-3 flex items-center border-2 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500">
                    <FaDollarSign className="absolute left-2" />
                    <input
                      type="number"
                      min="0"
                      name="price"
                      id = "price"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full pl-4 focus:outline-none focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  {priceError && (
                    <p className="text-red-500 text-sm mt-1">{priceError}</p>
                  )}
                </div>

          {/* Repeat for other fields like price, bedrooms, bathrooms, etc., based on your initial state */}
          
          <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Image
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="image"
                      id= "image"
                      onChange={handleFileChange}
                      className="w-full p-3 border-2 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
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
                      value={formData.details}
                      onChange={handleChange}
                      className="w-full p-1 border-2 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                      rows={6}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col space-y-4 mt-8">
      <div className="flex items-center">
        <FaBed className="mr-2 text-xl" />
        <button
          onClick={decrementBedrooms}
          className="px-2 bg-gray-200 hover:bg-gray-300 rounded-full text-lg font-bold"
        >
          -
        </button>
        <input
          type="text"
          readOnly
          value={bedrooms}
          className="w-12 text-center mx-2 border-2 border-gray-300 rounded-md"
        />
        <button
          onClick={incrementBedrooms}
          className="px-2 bg-gray-200 hover:bg-gray-300 rounded-full text-lg font-bold"
        >
          +
        </button>
        <span className="ml-2 text-sm md:text-base">Bedrooms</span>
      </div>
      <div className="flex items-center">
        <FaBath className="mr-2 text-xl" />
        <button
          onClick={decrementBathrooms}
          className="px-2 bg-gray-200 hover:bg-gray-300 rounded-full text-lg font-bold"
        >
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

          <GeocodingComponent
            onLatitudeChange={(latitude) => setFormData({ ...formData, latitude })}
            onLongitudeChange={(longitude) => setFormData({ ...formData, longitude })}
          />
              <div className="mt-6">
                <Toaster position="top-center" richColors />
                <button
                  type="submit"
                  onClick={handleBUttonClick}
                  className="w-full px-6 py-3 text-white bg-gradient-to-r from-red-500 to-red-700 rounded-md focus:outline-none focus:ring focus:border-red-300"
                >
                  Submit
                </button>
              </div>
              {successMessage && (
                <div className="mt-4 text-green-500 text-center">
                  {successMessage}
                </div>
              )}
        </div>
      </form>
      </div>
    )}
    </div>
    </div>
  </AppLayout>
  );
};

export default UpdatePropertyForm;
