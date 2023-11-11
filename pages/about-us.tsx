import React from 'react';

const About: React.FC = () => {
  const fadeInStyle: React.CSSProperties = {
    opacity: 0,
    animation: 'fadeIn 1.5s forwards',
  };

  const delay1sStyle: React.CSSProperties = {
    animationDelay: '1s',
  };

  const delay2sStyle: React.CSSProperties = {
    animationDelay: '2s',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ ...fadeInStyle }}>About RentalDai</h1>
        <p style={{ ...fadeInStyle, ...delay1sStyle }}>
          Welcome to RentalDai, your go-to platform for finding the perfect house to rent.
          We strive to make your house hunting experience smooth and enjoyable.
        </p>
        <p style={{ ...fadeInStyle, ...delay2sStyle }}>
          Our mission is to connect renters with their ideal homes, providing a seamless
          and user-friendly experience throughout the process.
        </p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default About;
