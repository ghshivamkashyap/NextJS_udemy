import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/eventsList";

const HomePage = () => {
  const featuredImages = getFeaturedEvents();
  console.log("featuredImages:", featuredImages);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Featured Events</h1>
        <EventsList items={featuredImages} />
      </div>
    </div>
  );
};

export default HomePage;
