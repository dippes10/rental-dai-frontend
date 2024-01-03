// pages/UserListingsPage.tsx
import React, { useState, useEffect } from "react";
import AppLayout from "../../components/AppLayout";

const UserListingsPage: React.FC = () => {
  const [listings, setListings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Make an API call to fetch user-specific listings based on the currently logged-in user
    fetch("/api/user-listings") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        if (data.listings) {
          setListings(data.listings);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user listings:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <AppLayout>
      <div className="bg-properties">
        <div className="container mx-auto mt-8 px-4 lg:px-2">
          <h1 className="text-3xl font-semibold mb-4 text-white">Your Listings</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <p>Loading listings...</p>
            ) : Array.isArray(listings) && listings.length > 0 ? (
              listings.map((listing) => (
                <div key={listing.id} className="relative">
                  <div className="bg-red-200 p-4 rounded-lg shadow-md transition-all hover:shadow-lg">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {listing.title}
                      </h3>
                      <p className="text-gray-700">{listing.address}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white">No listings found.</p>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default UserListingsPage;
