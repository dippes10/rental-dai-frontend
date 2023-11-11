import React from 'react';

const GoogleMapComponent: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '20cm',
        height: '20cm',
        overflow: 'hidden',
        margin: 'auto', // Center the map within the frame
        borderRadius: '10px', // Adjust the border radius as needed
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Customize the box shadow
      }}
    >
      {/* Frame design */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: '2px solid #ccc', // Customize the border style
          borderRadius: '8px', // Adjust the border radius as needed
        }}
      >
        {/* Google Maps iframe */}
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27776866968!2d85.28493322106048!3d27.709030241485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1699723383593!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
