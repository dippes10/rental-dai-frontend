import React from "react";
import Information from "./information";
import Featuring from "./featuring";
import Team from "./team";
import Newsletter from "./newsLetter";

const AboutUs: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
     

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
