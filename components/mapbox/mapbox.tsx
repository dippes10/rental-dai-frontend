import React, { useState } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import Button from "../Button";
import { useRouter } from "next/router"; // Import the useRouter hook

type Props = {
  longitude?: number;
  latitude?: number;
  zoom?: number;
  showMarker?: boolean;
  children?: React.ReactNode;
};

const MapboxComponent = (props: Props) => {
  const router = useRouter(); // Initialize the useRouter hook
  const mapboxToken =
    "pk.eyJ1IjoibnJpcGVuZHJhdGltaWxzaW5hIiwiYSI6ImNsbzdjeHlwdDA1NXYya3BkeWlrNzAxZHAifQ.tquxDmA15BRGrXcUyfUjJA";

  const [viewport, setViewport] = useState({
    latitude: props.latitude || 28.3949, // Centered on Nepal
    longitude: props.longitude || 84.124,
    zoom: props.zoom || 4,
  });

  const handleClick = () => {
    router.push("/home-navbar"); // Use router.push to navigate
  };

  return (
    <section>
      <div className="scrollable-container">
        <div className="map-container">
          <ReactMapGL
            {...viewport}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onMove={evt => setViewport(evt.viewState)}
            mapboxAccessToken={mapboxToken}
          >
            {props.children}
            {!!props.showMarker && (
              <Marker
                latitude={viewport.latitude}
                longitude={viewport.longitude}
              >
              </Marker>
            )}
            {/* Additional components, markers, or overlays can be added here */}
            <div style={{ position: "absolute", top: 10, right: 10 }}>
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
      {/* <Button
        title="Explore Rentals"
        type="outline"
        onClick={handleClick} // Use the handleClick function
      /> */}
    </section>
  );
};

export default MapboxComponent;
