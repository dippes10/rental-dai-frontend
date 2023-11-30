import { FaHome, FaCalendarCheck, FaCheckCircle, FaComments } from 'react-icons/fa';
import router from 'next/router';
import React from 'react';
import Button from '../components/Button';

const rentalDaiMessage = {
  title: 'About Us ',
  subTitle:
    'Discover a wide range of rental options that suit your lifestyle. RentalDai makes the search for flats and rooms easy and convenient. Join us on a journey to find your ideal living space.',
  cta: 'Explore Rentals',
  featureCards: [
    {
      icon: <FaHome />,
      title: 'Variety of Rentals',
      description: 'Explore a diverse range of flats and rooms for rent.',
    },
    {
      icon: <FaCalendarCheck />,
      title: 'Flexible Leases',
      description: 'Find rentals with flexible lease options to fit your needs.',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Quality Assurance',
      description: 'RentalDai ensures quality rentals for a comfortable living experience.',
    },
    {
      icon: <FaComments />,
      title: 'Customer Support',
      description: 'Dedicated customer support to assist you throughout your rental journey.',
    },
  ],
};

const Description: React.FC = () => {
  return (
    <section className="bg-gray-100">
      <div className="container-custom py-10 flex gap-10 md:gap-2 flex-wrap md:flex-nowrap items-center justify-between text-justify">
        <div className="md:w-4/5 mr-6" data-aos="fade-right">
          <h3 className="max-w-[500px] mb-5">{rentalDaiMessage.title}</h3>
          <p className="text-neutral-700 mb-12 max-w-[733px]">
            {rentalDaiMessage.subTitle}
          </p>
          <Button
            title={rentalDaiMessage.cta}
            type="outline"
            onClick={() => router.push('../properties/all')}
          />
        </div>
        <div className="md:max-w-[456px] grid xs:grid-cols-2 gap-4" data-aos="fade-left">
          {rentalDaiMessage.featureCards.map((card, i) => (
            <div
              key={i}
              className=" text-justify flex flex-col items-center justify-center px-4 py-5 bg-white rounded-lg shadow-main transition duration-300 transform hover:scale-105"
            >
              <div className="mb-2 text-primary-500 text-4xl">{card.icon}</div>
              <p className="mb-2 text-center font-semiBold">{card.title}</p>
              <p className="text-center text-neutral-700 text-s">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Description;
