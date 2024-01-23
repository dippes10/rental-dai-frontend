/* eslint-disable @next/next/no-img-element */
// pages/index.tsx

import React, { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import RentalFlipImage from "../components/CardFlip";
import Description from "../components/Description";
import MapboxComponent from "../components/mapbox/mapbox";
import { FaBed, FaBuilding, FaHome } from "react-icons/fa";

export const fakeProperties = [
  {
    id: 1,
    name: "Property 1",
    address: "123 Fake Street",
    imageUrl: "https://source.unsplash.com/800x600/?flat",
    location: {
      latitude: 27.6957153,
      longitude: 85.3016536,
    },
    bedrooms: 3,
    bathrooms: 2,
    price: "$500,000",
    description: "Spacious property with a beautiful view.",
  },
  {
    id: 2,
    name: "Property 2",
    address: "123 Fake Street",
    imageUrl: "https://source.unsplash.com/800x600/?room",
    location: {
      latitude: 27.6957453,
      longitude: 85.3136646,
    },
    bedrooms: 2,
    bathrooms: 1,
    price: "$300,000",
    description: "Cozy property with modern amenities.",
  },
  {
    id: 2,
    name: "Property 2",
    address: "123 Fake Street",
    imageUrl: "https://source.unsplash.com/800x600/?room",
    location: {
      latitude: 27.6957453,
      longitude: 85.3136646,
    },
    bedrooms: 2,
    bathrooms: 1,
    price: "$300,000",
    description: "Cozy property with modern amenities.",
  },
  {
    id: 5,
    name: "Property 5",
    address: "101 Patan Road",
    imageUrl: "https://source.unsplash.com/800x600/?Nepal,patan-house",
    location: {
      latitude: 27.6740,
      longitude: 85.3240,
    },
    bedrooms: 3,
    bathrooms: 2,
    price: "$450,000",
    description: "Modern home in the heart of historic Patan.",
  },
  {
    id: 6,
    name: "Property 6",
    address: "202 Bhaktapur Lane",
    imageUrl: "https://source.unsplash.com/800x600/?Nepal,bhaktapur-house",
    location: {
      latitude: 27.6710,
      longitude: 85.4297,
    },
    bedrooms: 5,
    bathrooms: 4,
    price: "$600,000",
    description: "Spacious family house near cultural landmarks.",
  },
];

const HomePage: React.FC = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // // To use fake data uncomment below commented code
    setProperties(fakeProperties);
    setFilteredProperties(fakeProperties);
    setIsLoading(false);

    // Uncomment the following code when using actual API

    // fetch("http://localhost:8080/api/properties")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.properties) {
    //       setProperties(data.properties);
    //       setFilteredProperties(data.properties);
    //     }
    //   })
    //   .catch((error) => console.error("Error fetching properties:", error))
    //   .finally(() => setIsLoading(false));
  }, []);

  return (
    <AppLayout>
      <div className="bg-black">
        <img
          src="/home-bg.png"
          width={0}
          height={0}
          className="w-full object-cover -mt-32"
          style={{
            height: "550px",
          }}
          alt="home landscape"
        />
        <div className="mx-2 lg:mx-4 relative rounded-xl bg-red -mt-8 z-69 bg-gray-50 overflow-visible">
          <RentalFlipImage />
          <MapboxComponent
            showNavigationControl={true}
            latitude={27.6957053}
            longitude={85.3226846}
            zoom={12}
            showAllProperties={true}
            properties={fakeProperties}
          />
          <Description />

          <div className="container mx-auto flex sm-flex">
            <div className="flex flex-wrap items-center -mt-2">
              <div className="w-full md:w-6/12 lg:w-4/12 px-4 mr-auto ml-auto -mt-12">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-300">
                  <img
                    alt="Cozy Home"
                    src="https://images.unsplash.com/photo-1511215579272-6192432f83bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhpbWFsYXlhJTIwbmVwYWx8ZW58MHx8MHx8fDA%3D"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    ></svg>
                    <h4 className="text-xl font-bold text-white">
                      Discover Your Perfect Home
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      rental-dai makes finding homes, flats, and rooms in Nepal
                      effortless and enjoyable. Explore a variety of rental
                      options tailored to your needs.
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-purple-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-100">
                          <FaHome />
                        </div>
                        <h6 className="text-xl mb-1 font-semibold text-gray-700">
                          Houses for Rent
                        </h6>
                        <p className="mb-4 text-gray-600">
                          Find the perfect house in the heart of Nepal, offering
                          comfort, space, and convenience.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-purple-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-100">
                          <FaBuilding />
                        </div>
                        <h6 className="text-xl mb-1 font-semibold text-gray-700">
                          Flats and Apartments
                        </h6>
                        <p className="mb-4 text-gray-600">
                          Explore a wide selection of apartments that blend
                          modern amenities with the charm of Nepalese culture.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-purple-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-100">
                          <FaBed />
                        </div>
                        <h6 className="text-xl mb-1 font-semibold text-gray-700">
                          Rooms for Rent
                        </h6>
                        <p className="mb-4 text-gray-600">
                          Perfect for students and professionals, our selection
                          of rooms offers affordability and convenience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;
