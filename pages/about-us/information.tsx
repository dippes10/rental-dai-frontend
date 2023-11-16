/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import houseImage from "../../public/house2.jpg"; // Replace with the actual path

interface InformationProps {}

const Information: React.FC<InformationProps> = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            {/* Additional Card Components or Text */}
            <p className="text-xl text-gray-700">
              Discover the ease of finding your perfect home with RentalDai in the heart of Kathmandu Valley.
              Whether you're looking for a spacious house, cozy flat, or comfortable room, we have diverse
              rental options to cater to your needs.
            </p>
            <p className="text-xl text-gray-700">
              Explore RentalDai's user-friendly platform, where you can easily browse through available
              properties, view high-quality images, and get detailed insights into each rental option.
            </p>
            <p className="text-xl text-gray-700">
              With our integrated payment module, renting your dream space is just a click away. Enjoy a
              seamless and secure payment experience to make the process hassle-free.
            </p>
          </div>
          <div className="ml-auto mt-3 lg:mt-0">
            {/* Replace with your custom card component */}
            <div className="mb-5">
              <div className="relative">
                {/* Use next/image for optimized images */}
                <Image
                  src={houseImage}
                  alt="RentalDai House"
                  className="w-full rounded-md"
                  width={1950}
                  height={1300}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-2">Rent Your Perfect Home with RentalDai</h3>
                <p className="text-gray-700">
                  Find the ideal rental space that suits your lifestyle and preferences. Enjoy the convenience
                  of a straightforward rental process and a secure payment gateway.
                </p>
                <a
                  href="pages/company/about-us"
                  className="text-info font-bold hover:underline"
                >
                  Discover More About RentalDai
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
