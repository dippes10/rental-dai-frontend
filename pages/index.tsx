// pages/index.tsx

import React from "react";
import Image from "next/image";
import AppLayout from "../components/AppLayout";
import GoogleMapComponent from "../components/GoogleMap";
import RentalFlipImage from "../components/CardFlip";
import Description from "../components/Description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faCheckCircle,
  faKey,
  faMapMarkerAlt,
  faHandsHelping,
  faDollarSign,
  faCalendarAlt,
  faWifi,
  faParking,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import BigNav from "../components/NavBar/home-navbar";
import MapboxComponent from "../components/mapbox/mapbox";

// Example founder's photo from Unsplash (replace with actual URL)
const founderPhotoUrl = "/sirak-shrestha.jpeg";

// Dummy data for other sections and advertisements (replace with actual data)
const otherSectionsData = [
  {
    title: "Featured Properties",
    description: "Discover our top-rated rental properties.",
    imageUrl: "/house2.jpg",
  },
  // Add more sections as needed
];

const advertisementsData = [
  {
    title: "Special Offer",
    description: "Get 20% off your first rental! Limited time offer.",
    imageUrl: "/house1.jpg",
  },
  // Add more advertisements as needed
];

const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <MapboxComponent/>
      <BigNav/>
      <RentalFlipImage />
      <Description />
      <section className="hero bg-gradient-to-r from-red-500 via-red-700 to-red-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Rental-Dai - Your Home, Your Way
          </h1>
          <p className="text-lg text-gray-300">
            Find the perfect rental property that suits your lifestyle.
          </p>
        </div>
      </section>

      <GoogleMapComponent />

      <section className="founder-message bg-gray-100 py-16">
        <div className="container mx-auto flex items-center">
          <div className="mr-8">
            <Image
              src={founderPhotoUrl}
              alt="Founder's Photo"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Message from Our Founder
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget felis in sapien dignissim feugiat non eget turpis. Curabitur
              at erat justo.
            </p>
          </div>
        </div>
      </section>

      <section className="steps bg-gray-100 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="step">
            <FontAwesomeIcon icon={faSearch} className="text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Search</h3>
            <p className="text-gray-600">
              Explore a wide range of rental properties that match your criteria.
            </p>
          </div>
          <div className="step">
            <FontAwesomeIcon icon={faCheckCircle} className="text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Choose</h3>
            <p className="text-gray-600">
              Select your ideal property from our curated listings.
            </p>
          </div>
          <div className="step">
            <FontAwesomeIcon icon={faKey} className="text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure</h3>
            <p className="text-gray-600">
              Easily secure your chosen rental with our hassle-free process.
            </p>
          </div>
          <div className="step">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Locate</h3>
            <p className="text-gray-600">
              Conveniently locate your new home on our interactive map.
            </p>
          </div>
          <div className="step">
            <FontAwesomeIcon icon={faHandsHelping} className="text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Assistance</h3>
            <p className="text-gray-600">
              Get personalized assistance throughout the renting process.
            </p>
          </div>
          <div className="step">
            <FontAwesomeIcon icon={faDollarSign} className="text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Affordable</h3>
            <p className="text-gray-600">
              Find affordable rentals that fit your budget effortlessly.
            </p>
          </div>
          <div className="step">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Flexible</h3>
            <p className="text-gray-600">
              Enjoy flexible rental terms tailored to your needs.
            </p>
          </div>
          <div className="step">
            <FontAwesomeIcon icon={faHome} className="text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Feel at Home</h3>
            <p className="text-gray-600">
              Settle into your new home and make it your own.
            </p>
          </div>
        </div>
      </section>

      <section className="facilities bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Facilities We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="facility">
              <FontAwesomeIcon icon={faWifi} className="text-4xl mb-4" />
              <p className="text-lg font-semibold mb-2">High-Speed Internet</p>
              <p className="text-gray-600">
                Stay connected with our fast and reliable internet service.
              </p>
            </div>
            <div className="facility">
              <FontAwesomeIcon icon={faParking} className="text-4xl mb-4" />
              <p className="text-lg font-semibold mb-2">Parking Space</p>
              <p className="text-gray-600">
                Hassle-free parking options available for our residents.
              </p>
            </div>
            <div className="facility">
              <FontAwesomeIcon icon={faUtensils} className="text-4xl mb-4" />
              <p className="text-lg font-semibold mb-2">Fully Equipped Kitchen</p>
              <p className="text-gray-600">
                Enjoy the convenience of a fully equipped kitchen in every rental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {otherSectionsData.map((section, index) => (
        <section
          key={index}
          className={`other-section py-16 ${
            index % 2 === 0 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:order-2">
              <Image
                src={section.imageUrl}
                alt={section.title}
                width={800}
                height={600}
                className="rounded-md"
              />
            </div>
            <div className="w-full md:w-1/2 md:order-1 md:ml-4">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-600">{section.description}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="advertisements bg-gray-100 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advertisementsData.map((ad, index) => (
            <div key={index} className="advertisement">
              <h3 className="text-xl font-bold mb-2">{ad.title}</h3>
              <p className="text-gray-600 mb-4">{ad.description}</p>
              <Image
                src={ad.imageUrl}
                alt={ad.title}
                width={800}
                height={400}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </section>
    </AppLayout>
  );
};

export default HomePage;
