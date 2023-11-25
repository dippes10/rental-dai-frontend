import React, { useState } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";

type Props = {
  longitude?: number;
  latitude?: number;
  zoom?: number;
  showMarker?: boolean;
  showNavigationControl?: boolean;
  disableMove?: boolean;
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
    <section className="-z-10">
      <div className="scrollable-container">
        <div className="map-container">
          <ReactMapGL
            {...viewport}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/navigation-preview-day-v4"
            onMove={(evt) => {
              if (props.disableMove) return;
              setViewport(evt.viewState);
            }}
            mapboxAccessToken={mapboxToken}
          >
            {props.children}
            {!!props.showMarker && (
              <Marker
                latitude={viewport.latitude}
                longitude={viewport.longitude}
                draggable={false}
              ></Marker>
            )}
            {/* Additional components, markers, or overlays can be added here */}
            {!!props.showNavigationControl && (
              <div style={{ position: "absolute", top: 10, right: 10 }}>
                <NavigationControl showCompass={false} />
              </div>
            )}
          </ReactMapGL>
        </div>
        <style jsx>{`
          .scrollable-container {
            height: 400px;
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
