import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faHotel, faBuilding } from '@fortawesome/free-solid-svg-icons';

import {
  faBitcoin,
  faPinterest,
  faSpotify,
  faAirbnb,
  faUber,
  faCcVisa,
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';

interface FeaturingProps {}

const Featuring: React.FC<FeaturingProps> = () => {
  return (
    <section className="pt-3 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {/* Add more icons related to rental services */}
          <div className="w-full flex items-center justify-center">
            <FontAwesomeIcon icon={faBitcoin} size="3x" className="text-yellow-500 hover:text-yellow-600 transition duration-300 cursor-pointer" />
          </div>
          <div className="w-full flex items-center justify-center">
            <FontAwesomeIcon icon={faPinterest} size="3x" className="text-red-500 hover:text-red-600 transition duration-300 cursor-pointer" />
          </div>
          <div className="w-full flex items-center justify-center">
            <FontAwesomeIcon icon={faSpotify} size="3x" className="text-green-500 hover:text-green-600 transition duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-center text-center">
          {/* Replace with your custom counter card components */}
          {/* ... */}
        </div>
      </div>
    </section>
  );
};

export default Featuring;
