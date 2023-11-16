import React from "react";
import Image from "next/image";
import Information from "./information";
import Featuring from "./featuring";
import Team from "./team";
import Newsletter from "./newsLetter";

const AboutUs: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to RentalDai</h1>
          <p className="text-gray-600">
            Providing high-quality rental services for your housing needs.
          </p>
        </div>
      </section>

      {/* Information Section */}
      <Information />

      {/* Featuring Section */}
      <Featuring />

      {/* Team Section */}
      <Team />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default AboutUs;
