import Link from "next/link";
import React from "react";

const EventsList = (props) => {
  const { items } = props;
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {items.map((event) => (
        <div
          key={event.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            height={192}
            width={320}
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{event.title}</h2>
            <p className="text-gray-700 mb-2">{event.date}</p>
            <p className="text-gray-700 mb-2">{event.location}</p>
            <p className="text-gray-600">{event.description}</p>
            <Link href={`/events/${event.id}`}>Explore event</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
