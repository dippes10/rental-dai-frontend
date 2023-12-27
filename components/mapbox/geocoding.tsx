import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import Button from "../../components/Button";

mapboxgl.accessToken = 'pk.eyJ1IjoibnJpcGVuZHJhdGltaWxzaW5hIiwiYSI6ImNsbzdjeHlwdDA1NXYya3BkeWlrNzAxZHAifQ.tquxDmA15BRGrXcUyfUjJA';

const GeocodingComponent = () => {
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [marker, setMarker] = useState<mapboxgl.Marker | null>(null);
  const [searching, setSearching] = useState(false);
  const [warning, setWarning] = useState("");

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 14,
      });

      const newMarker = new mapboxgl.Marker({ draggable: true }).setLngLat([longitude, latitude]).addTo(map);
      setMarker(newMarker);

      newMarker.on("dragend", () => {
        const markerLngLat = newMarker.getLngLat();
        setLongitude(markerLngLat.lng);
        setLatitude(markerLngLat.lat);
      });

      // Add Mapbox geolocate control
      map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserLocation: true,
      }), "top-left");

      // Add Mapbox navigation controls
      map.addControl(new mapboxgl.NavigationControl(), "top-left");

      return () => {
        map.remove();
      };
    }
  }, [latitude, longitude]);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleFetchCoordinates = async () => {
    try {
      setSearching(true);

      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          location
        )}.json?access_token=${mapboxgl.accessToken}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Mapbox API Response:", data);
        const [lng, lat] = data.features[0].center;
        console.log("Latitude:", lat);
        console.log("Longitude:", lng);
        setLongitude(lng);
        setLatitude(lat);
        if (marker) {
          marker.setLngLat([lng, lat]);
        }
      } else {
        console.error("Failed to fetch coordinates");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    } finally {
      setSearching(false);
    }
  };

  const handleFetchMarkerLocation = () => {
    if (marker) {
      const markerLngLat = marker.getLngLat();
      console.log("Marker Latitude:", markerLngLat.lat);
      console.log("Marker Longitude:", markerLngLat.lng);
    }
  };

  const handleAddCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLat = position.coords.latitude;
          const currentLng = position.coords.longitude;
          setLatitude(currentLat);
          setLongitude(currentLng);
          if (marker) {
            marker.setLngLat([currentLng, currentLat]);
          }
          setWarning("Geo-location might not be accurate. You need to adjust the marker for better results.");
        },
        (error) => {
          console.error("Error getting current location:", error);
          setWarning("Error getting current location. Please try again or enter manually.");
        }
      );
    } else {
      setWarning("Geolocation is not supported by your browser. Please enter the location manually.");
    }
  };

  return (
    <div className="geocoding-container border p-4">
      <div className="grid gap-4">
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter location"
            className="p-2 border bg-red-50 outline-red-300"
          />
        </label>
        <button
          className=" mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
          onClick={handleFetchCoordinates}
        >
          {searching ? "Searching..." : "Search"}
        </button>
        <Button
                type="outline"
                title="Get your location"
          onClick={handleAddCurrentLocation} >
            </Button>
      </div>
      {latitude !== null && longitude !== null && (
        <div>
          <div id="map" className="map-container"></div>
          <p className="text-red-500">{warning}</p>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <button
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
            onClick={handleFetchMarkerLocation}
          >
            Fetch Marker Location
          </button>
        </div>
      )}
    </div>
  );
};

export default GeocodingComponent;
