import React, { useState } from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import Button from '../Button';
import { useRouter } from 'next/router'; // Import the useRouter hook

const MapboxComponent = () => {
  const router = useRouter(); // Initialize the useRouter hook
  const mapboxToken = 'pk.eyJ1IjoibnJpcGVuZHJhdGltaWxzaW5hIiwiYSI6ImNsbzdjeHlwdDA1NXYya3BkeWlrNzAxZHAifQ.tquxDmA15BRGrXcUyfUjJA';

  const [viewport, setViewport] = useState({
    latitude: 28.3949, // Centered on Nepal
    longitude: 84.1240,
    zoom: 6,
  });

  const handleClick = () => {
    router.push('/home-navbar'); // Use router.push to navigate
  };

  return (
    <section>
      <div className="scrollable-container">
        <div className="map-container">
          <ReactMapGL
            {...viewport}
            style={{ width: '100%', height: '100%' }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={mapboxToken}
          >
            {/* Additional components, markers, or overlays can be added here */}
            <div style={{ position: 'absolute', top: 10, right: 10 }}>
              <NavigationControl showCompass={false} />
            </div>
          </ReactMapGL>
        </div>
        <style jsx>{`
          .scrollable-container {
            height: 60vh;
            overflow: auto;
          }

          .map-container {
            position: relative;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </div>
      <Button
        title="Explore Rentals"
        type="outline"
        onClick={handleClick} // Use the handleClick function
      />
    </section>
  );
};

export default MapboxComponent;
