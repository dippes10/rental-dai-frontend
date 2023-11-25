// pages/index.tsx

import React from "react";
import Image from "next/image";
import AppLayout from "../components/AppLayout";
import RentalFlipImage from "../components/CardFlip";
import Description from "../components/Description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faKey,
  faMapMarkerAlt,
  faHandsHelping,
  faDollarSign,
  faCalendarAlt,
  faWifi,
  faParking,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import MapboxComponent from "../components/mapbox/mapbox";

// Example founder's photo from Unsplash (replace with actual URL)
const founderPhotoUrl = "/sirak-shrestha.jpeg";

const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <MapboxComponent />
      <RentalFlipImage />
      <Description />
      <section className="hero bg-gradient-to-r from-red-500 via-red-700 to-red-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Perfect Rental Property
          </h1>
          <p className="text-lg text-gray-300">
            Welcome to Rental-Dai, where your ideal home is just a click away.
          </p>
        </div>
      </section>

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
          {[
            {
              icon: faSearch,
              title: "Explore",
              description:
                "Explore a wide range of rental properties that match your criteria.",
            },
            {
              icon: faKey,
              title: "Select",
              description:
                "Select your ideal property from our curated listings.",
            },
            {
              icon: faMapMarkerAlt,
              title: "Locate",
              description:
                "Conveniently locate your new home on our interactive map.",
            },
            {
              icon: faHandsHelping,
              title: "Assistance",
              description:
                "Get personalized assistance throughout the renting process.",
            },
          ].map((step, index) => (
            <div key={index} className="step">
              <FontAwesomeIcon icon={step.icon} className="text-2xl mb-4" />
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="facilities bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Facilities We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: faWifi,
                title: "High-Speed Internet",
                description:
                  "Stay connected with our fast and reliable internet service.",
              },
              {
                icon: faParking,
                title: "Parking Space",
                description:
                  "Hassle-free parking options available for our residents.",
              },
              {
                icon: faUtensils,
                title: "Fully Equipped Kitchen",
                description:
                  "Enjoy the convenience of a fully equipped kitchen in every rental.",
              },
            ].map((facility, index) => (
              <div key={index} className="facility">
                <FontAwesomeIcon
                  icon={facility.icon}
                  className="text-2xl mb-4"
                />
                <p className="text-lg font-semibold mb-2">{facility.title}</p>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default HomePage;
