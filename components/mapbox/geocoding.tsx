import React, { useState } from "react";

const GeocodingComponent = () => {
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleFetchCoordinates = async () => {
    try {
      const mapboxAccessToken = 'pk.eyJ1IjoibnJpcGVuZHJhdGltaWxzaW5hIiwiYSI6ImNsbzdjeHlwdDA1NXYya3BkeWlrNzAxZHAifQ.tquxDmA15BRGrXcUyfUjJA';
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          location
        )}.json?access_token=${mapboxAccessToken}`
      );

      if (response.ok) {
        const data = await response.json();
        const [lng, lat] = data.features[0].center;
        setLongitude(lng);
        setLatitude(lat);
      } else {
        console.error("Failed to fetch coordinates");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <div>
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter location"
        />
      </label>
      <button onClick={handleFetchCoordinates}>Fetch Coordinates</button>

      {latitude !== null && longitude !== null && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
    </div>
  );
};

export default GeocodingComponent;
