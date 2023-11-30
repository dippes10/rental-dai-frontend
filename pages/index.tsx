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
      <MapboxComponent showNavigationControl={true} latitude={27.6957053} longitude={85.3526846} zoom={12} showAllProperties={true} properties={fakeProperties} />
        <Description />
      </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;
