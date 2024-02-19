import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaUpload } from "react-icons/fa";
import AppLayout from "../../components/AppLayout";
import { toast, Toaster } from "sonner";
import GeocodingComponent from "../../components/mapbox/geocoding";

// Define a type for the errors state
interface ErrorState {
  form?: string;
}

const UpdatePropertyForm = () => {
  const router = useRouter();
  const { propertyId } = router.query;
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

  useEffect(() => {
    if (!propertyId) return;
    const fetchPropertyData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/properties/${propertyId}`, {
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
          details: property.details,
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
      const response = await fetch(`/api/properties/${propertyId}`, {
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
      router.push(`/properties/${propertyId}`);
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

  return (
    <AppLayout>
    <Toaster />
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {/* Repeat for other fields like price, bedrooms, bathrooms, etc., based on your initial state */}
          
          <div>
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images</label>
            <input
              type="file"
              name="images"
              id="images"
              multiple
              onChange={handleFileChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            />
            {/* Optionally, display thumbnails of selected images */}
          </div>

          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-700">Details</label>
            <textarea
              name="details"
              id="details"
              value={formData.details}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              rows={4}
            ></textarea>
          </div>

          {/* Include other inputs as necessary */}

          <GeocodingComponent
            onLatitudeChange={(latitude) => setFormData({ ...formData, latitude })}
            onLongitudeChange={(longitude) => setFormData({ ...formData, longitude })}
          />

          <button type="submit" className="w-full px-6 py-3 text-white bg-gradient-to-r from-red-500 to-red-700 rounded-md focus:outline-none focus:ring focus:border-red-300">
            Update
          </button>
        </div>
      </form>
    )}
  </AppLayout>
  );
};

export default UpdatePropertyForm;
