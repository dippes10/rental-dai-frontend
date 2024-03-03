import {
  FaHome,
  FaCalendarCheck,
  FaCheckCircle,
  FaComments,
} from "react-icons/fa";
import router from "next/router";
import React from "react";
import Button from "../components/Button";
import Image from "next/image";

const tabs = [
  {
    title: "Houses for Rent",
    value: "houses-for-rent",
    content: (
      <div className=" w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-400">
        <p>
          Explore houses available for rent across major cities in Nepal. Find
          the perfect place that meets your needs and budget.
        </p>
        <Image
          src="/houses-for-rent.webp"
          alt="Houses for rent"
          width="1000"
          height="1000"
          className="object-cover object-center h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
      </div>
    ),
  },
  {
    title: "Rooms for Rent",
    value: "rooms-for-rent",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-green-500 to-lime-400">
        <p>
          Find single rooms, shared rooms, and hostels tailored to students and
          working professionals in key locations.
        </p>
        <Image
          src="/rooms-for-rent.webp"
          alt="Rooms for rent"
          width="1000"
          height="1000"
          className="object-cover object-center h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
      </div>
    ),
  },
  {
    title: "About Us",
    value: "about-us",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-purple-500 to-pink-400">
        <p>
          Learn more about rental-dai, our mission, and the team dedicated to
          making your home renting experience in Nepal seamless.
        </p>
      </div>
    ),
  },
  {
    title: "How It Works",
    value: "how-it-works",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-yellow-500 to-orange-400">
        <p>
          Discover how rental-dai simplifies the process of finding and renting
          your next home or room in Nepal.
        </p>
      </div>
    ),
  },
  {
    title: "Contact Us",
    value: "contact-us",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-teal-500 to-emerald-400">
        <p>
          Have questions or need assistance? Get in touch with our support team
          for personalized help.
        </p>
      </div>
    ),
  },
];

const RentalDaiMessage = {
  title: "About Us ",
  subTitle:
    "Discover a wide range of rental options that suit your lifestyle. RentalDai makes the search for flats and rooms easy and convenient. Join us on a journey to find your ideal living space.",
  cta: "Explore Rentals",
  featureCards: [
    {
      icon: <FaHome />,
      title: "Variety of Rentals",
      description: "Explore a diverse range of flats and rooms for rent.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Flexible Leases",
      description:
        "Find rentals with flexible lease options to fit your needs.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Assurance",
      description:
        "RentalDai ensures quality rentals for a comfortable living experience.",
    },
    {
      icon: <FaComments />,
      title: "Customer Support",
      description:
        "Dedicated customer support to assist you throughout your rental journey.",
    },
  ],
};

const Description: React.FC = () => {
  return (
    <section className="bg-gray-100 mb-8">
      <div className="container-custom py-10 flex gap-10 md:gap-2 flex-wrap md:flex-nowrap items-center justify-between text-justify">
        <div className="md:w-4/5 mr-6" data-aos="fade-right">
          <h3 className="max-w-[500px] mb-5">{RentalDaiMessage.title}</h3>
          <p className="text-neutral-700 mb-12 max-w-[733px]">
            {RentalDaiMessage.subTitle}
          </p>
          <Button
            title={RentalDaiMessage.cta}
            type="outline"
            onClick={() => router.push("../properties/all")}
          />
        </div>
        <div
          className="md:max-w-[456px] grid xs:grid-cols-2 gap-4"
          data-aos="fade-left"
        >
          {RentalDaiMessage.featureCards.map((card, i) => (
            <div
              key={i}
              className=" text-justify flex flex-col items-center justify-center px-4 py-5 bg-white rounded-lg shadow-main transition duration-300 transform hover:scale-105"
            >
              <div className="mb-2 text-primary-500 text-4xl">{card.icon}</div>
              <p className="mb-2 text-center font-semiBold">{card.title}</p>
              <p className="text-center text-neutral-700 text-s">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Description;
