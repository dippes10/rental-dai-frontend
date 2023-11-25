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
      <div className="mx-2 lg:mx-4 relative rounded-xl bg-red -mt-8 z-69 bg-white overflow-visible">
        <RentalFlipImage />
        <Description />
      <MapboxComponent showNavigationControl={true} />


  

      </div>
    </AppLayout>
  );
};

export default HomePage;
