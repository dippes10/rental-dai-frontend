/* eslint-disable @next/next/no-img-element */
// pages/index.tsx

import React from "react";
import Image from "next/image";
import AppLayout from "../components/AppLayout";
import RentalFlipImage from "../components/CardFlip";
import Description from "../components/Description";
import MapboxComponent from "../components/mapbox/mapbox";
import { fakeProperties } from "./properties/all";


// Example founder's photo from Unsplash (replace with actual URL)
const founderPhotoUrl = "/sirak-shrestha.jpeg";

const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <div className="bg-black">
        <img
          src="/bg-home.jpeg"
          width={0}
          height={0}
          className="w-full object-cover -mt-32"
          style={{
            height: "550px",
          }}
          alt="hero landscape"
        />
        <div className="mx-2 lg:mx-4 relative rounded-xl bg-red -mt-8 z-69 bg-gray-50 overflow-visible">
          <RentalFlipImage />
          <MapboxComponent
            showNavigationControl={true}
            latitude={27.6957053}
            longitude={85.3526846}
            zoom={12}
            showAllProperties={true}
            properties={fakeProperties}
          />
          <Description />

          <div
            className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-600">
                  <img
                    alt="Cozy Home"
                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
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
                      Rental-Dai makes finding homes, flats, and rooms in Nepal
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
                        <div className="text-green-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fas fa-home"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Houses for Rent
                        </h6>
                        <p className="mb-4 text-green-500">
                          Find the perfect house in the heart of Nepal, offering
                          comfort, space, and convenience.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-green-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fas fa-building"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold fa-house">
                          Flats and Apartments
                        </h6>
                        <p className="mb-4 text-green-500">
                          Explore a wide selection of apartments that blend
                          modern amenities with the charm of Nepalese culture.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-green-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fas fa-bed"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Rooms for Rent
                        </h6>
                        <p className="mb-4 text-green-500">
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

          {/* {/* Footer Container */}
          {/* <div className="container mx-auto mt-20 max-w-screen-md bg-gray-100">
            <div className="flex flex-wrap justify-center bg-red-300 shadow-xl rounded-lg -mt-64 py-20 px-12 relative z-10">
              <div className="w-auto text-center lg:w-8/12">
                <h1 className="text-4xl text-center font-bold text-primary">
                  Find Your Dream Rental in Nepal
                </h1>
                <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-6">
                  Looking for a comfortable place to stay during your visit to
                  Nepal? Our website offers a wide range of houses and rooms for
                  rent in the most beautiful locations across Nepal.
                </p>
                <div className="sm:block flex flex-col mt-8">
                  <a
                    href="#search-rentals"
                    className="explore-button text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-primary active:bg-primary-dark uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Search Rentals
                  </a>
                  <a
                    href="#list-your-property"
                    className="list-property-button text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-secondary active:bg-secondary-dark uppercase text-sm shadow hover:shadow-lg"
                  >
                    List Your Property
                  </a>
                </div>
              </div>
            </div>
          </div>  */}
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;
