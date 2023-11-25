import React, { useState } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";

type Props = {
  longitude?: number;
  latitude?: number;
  zoom?: number;
  showMarker?: boolean;
  children?: React.ReactNode;
};

const MapboxComponent = (props: Props) => {
  const mapboxToken =
    "pk.eyJ1IjoibnJpcGVuZHJhdGltaWxzaW5hIiwiYSI6ImNsbzdjeHlwdDA1NXYya3BkeWlrNzAxZHAifQ.tquxDmA15BRGrXcUyfUjJA";

  const [viewport, setViewport] = useState({
    latitude: props.latitude || 28.3949,
    longitude: props.longitude || 84.124,
    zoom: props.zoom || 12,
  });

  return (
    <section>
      <div className="scrollable-container">
        <div className="map-container">
          <ReactMapGL
            {...viewport}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/navigation-preview-day-v4"
            onMove={evt => setViewport(evt.viewState)}
            mapboxAccessToken={mapboxToken}
          >
            {props.children}
            {!!props.showMarker && (
              <Marker
                latitude={viewport.latitude}
                longitude={viewport.longitude}
                draggable = {false}
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
            height: 30vh;
            overflow: auto;
          }
 
          .map-container {
            position: relative;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </div>
    </section>
  );
};

export default MapboxComponent;
