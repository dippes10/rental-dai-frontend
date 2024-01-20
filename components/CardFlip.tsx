/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import router from "next/router";
import React, { useState, useEffect } from "react";
import CardFlip from "react-card-flip";
import Button from "../components/Button";

const rentalImages: string[] = [
  "https://source.unsplash.com/800x600/?Nepal-house",
  "https://source.unsplash.com/800x600/?Nepal-traditional-home",
];


const RentalFlipImage: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const flipDelay = 3000;

  useEffect(() => {
    let flipTimeout: NodeJS.Timeout | undefined;

    if (!isHovered) {
      flipTimeout = setTimeout(() => {
        setIsFlipped(!isFlipped);
      }, flipDelay);
    }

    return () => {
      if (flipTimeout) {
        clearTimeout(flipTimeout);
      }
    };
  }, [isFlipped, isHovered]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="flex flex-col items-center justify-center py-10 md:flex-row md:gap-20 container-custom" data-aos="fade-right">
      <div className="md:w-3/5 text-center md:text-left" data-aos="fade-right">
        <h3 className="mb-4">
          Find Your Perfect Rental with <span className="text-primary-500">HomeRental</span>
        </h3>
        <p className="max-w-[830px] text-neutral-700 mb-6 justify-between text-justify">
          Explore a variety of flats and rooms available for rent through HomeRental. Whether you're looking for a cozy room or a spacious flat, we've got you covered. Our platform makes finding the perfect rental easy and convenient.
          <br />
          Join us on a journey to discover quality rentals and make your next living space a comfortable and enjoyable one.
        </p>
        <Button
          title="About Us"
          type="outline"
          onClick={() => router.push("../about-us")}
        />
      </div>
      <div
        className="relative w-full max-w-sm md:w-4/5 self-center"
        data-aos="fade-left"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <div className="py-6 -top-5 -left-14 mx-auto">
            <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <div onClick={handleCardClick}>
                <img
                  src={rentalImages[0]}
                  alt="front"
                  height={375}
                  width={375}
                  className="z-10 rounded-lg hero cursor-pointer"
                />
              </div>
              <div onClick={handleCardClick}>
                <img
                  src={rentalImages[1]}
                  alt="back"
                  height={375}
                  width={375}
                  className="z-10 rounded-lg hero cursor-pointer"
                />
              </div>
            </CardFlip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalFlipImage;
