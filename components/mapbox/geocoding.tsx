import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoibnJpcGVuZHJhdGltaWxzaW5hIiwiYSI6ImNsbzdjeHlwdDA1NXYya3BkeWlrNzAxZHAifQ.tquxDmA15BRGrXcUyfUjJA';

const GeocodingComponent = () => {
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 13,
      });

      const marker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

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
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          location
        )}.json?access_token=${mapboxgl.accessToken}`
      );

      if (response.ok) {
        const data = await response.json();
        const [lng, lat] = data.features[0].center;
        setLongitude(lng);
        setLatitude(lat);

        // Send latitude and longitude to the backend
        sendCoordinatesToBackend(lat, lng);
      } else {
        console.error("Failed to fetch coordinates");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const sendCoordinatesToBackend = (lat: number, lng: number) => {
    // Replace this with your backend API endpoint
    const backendEndpoint = "https://your-backend-api.com/coordinates";
    
    fetch(backendEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        latitude: lat,
        longitude: lng,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to send coordinates to the backend");
        }
      })
      .catch(error => {
        console.error("Error sending coordinates to the backend:", error);
      });
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
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
          onClick={handleFetchCoordinates}
        >
          Fetch Coordinates
        </button>
      </div>
      {latitude !== null && longitude !== null && (
        <div>
          <div id="map" className="map-container mt-4"></div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
    </div>
  );
};

export default GeocodingComponent;
