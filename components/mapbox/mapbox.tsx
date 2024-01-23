import React, { useState } from "react";
import ReactMapGL, {
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";

type Props = {
  longitude?: number;
  latitude?: number;
  zoom?: number;
  showMarker?: boolean;
  showNavigationControl?: boolean;
  disableMove?: boolean;
  children?: React.ReactNode;
  showAllProperties?: boolean;
  properties?: any;
  height?: string;
  onMapClick?: any;
  width?: string;
};

const MapboxComponent = (props: Props) => {
  console.log("props.height", props.height);
  const mapboxToken =
    "pk.eyJ1IjoibnJpcGVuZHJhdGltaWxzaW5hIiwiYSI6ImNsbzdjeHlwdDA1NXYya3BkeWlrNzAxZHAifQ.tquxDmA15BRGrXcUyfUjJA";

  const [viewport, setViewport] = useState({
    latitude: props.latitude || 28.3949,
    longitude: props.longitude || 84.124,
    zoom: props.zoom || 12,
  });

  return (
    <section className="-z-10">
      <div
        className="scrollable-container"
        style={{
          height: props.height || "400px",
        }}
      >
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
            {
              // @ts-ignore
              props.showAllProperties &&
                props.properties.map((property: any) => (
                  <Marker 
                    key={property.id}
                    latitude={property.latitude}
                    longitude={property.longitude}
                    draggable={false}
                  />
                ))
            }
            {props.children}
            {/* {props.showMarker && (
              <Marker
                key="1"
                latitude={viewport.latitude}
                longitude={viewport.longitude}
                draggable={false}
              />
            )} */}
            <GeolocateControl />
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
