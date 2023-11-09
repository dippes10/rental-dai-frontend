// pages/index.tsx

import React from "react";
import Image from "next/image";
import Dropdown from "../components/header/Dropdown";
import AppLayout from "../components/AppLayout";

// Example founder's photo from Unsplash (replace with actual URL)
const founderPhotoUrl = "/house1.jpg";

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
      {/* Hero Section */}
      <section className="hero">
        {/* Hero content */}
        <div className="container mx-auto text-center py-16">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Rental-Dai - Your Home, Your Way
          </h1>
          <p className="text-lg text-gray-600">
            Find the perfect rental property that suits your lifestyle.
          </p>
        </div>
        {/* <Dropdown
          navItem={{
            id: 1,
            navItem: "Dropdown",
            navLink: "/",
            subNavItems: [
              {
                id: 2,
                navItem: "Dropdown",
                navLink: "/buahwahahaaaha",
                subNavItems: [],
              }
            ],
          }}
        /> */}
      </section>

      {/* Founder's Message Section */}
      <section className="founder-message bg-gray-100 py-16">
        <div className="container mx-auto flex items-center">
          {/* Founder's Photo */}
          <div className="mr-8">
            <Image
              src={founderPhotoUrl}
              alt="Founder's Photo"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          {/* Founder's Message */}
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

      {/* Other Sections */}
      {otherSectionsData.map((section, index) => (
        <section key={index} className="other-section py-16">
          <div className="container mx-auto flex items-center">
            <div className="w-1/2">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-600">{section.description}</p>
            </div>
            <div className="w-1/2">
              <Image
                src={section.imageUrl}
                alt={section.title}
                width={800}
                height={600}
                className="rounded-md"
              />
            </div>
          </div>
        </section>
      ))}

      {/* Advertisement Section */}
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
              />
            </div>
          ))}
        </div>
      </section>
    </AppLayout>
  );
};

export default HomePage;
