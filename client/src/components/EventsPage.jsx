import React from "react";
import { Link } from "react-router-dom";

const eventsData = [
  {
    id: 1,
    name: "Cultural Festival",
    date: "December 10, 2024",
    description: "Join us for a celebration of culture featuring performances, food stalls, and art exhibits.",
  },
  {
    id: 2,
    name: "Adventure Sports Weekend",
    date: "January 15-17, 2025",
    description: "Experience thrilling outdoor activities including rock climbing, zip-lining, and hiking.",
  },
  {
    id: 3,
    name: "Gourmet Food Fair",
    date: "February 20, 2025",
    description: "Indulge in a variety of culinary delights from top chefs and local vendors.",
  },
  {
    id: 4,
    name: "Music Concert",
    date: "March 25, 2025",
    description: "Enjoy live performances from renowned artists and local bands in a beautiful outdoor setting.",
  },
];

const EventsPage = () => {
  return (
    <div className="events-page-container w-full max-w-4xl mx-auto mb-10 p-20">
      <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>

      <div className="events-list">
        {eventsData.map((event) => (
          <div key={event.id} className="event-item border p-4 mb-4 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-2">{event.name}</h2>
            <p className="text-gray-600 mb-2">{event.date}</p>
            <p className="mb-4">{event.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p>
          Interested in organizing an event with us?{" "}
          <Link to="/contact" className="text-blue underline">
            Contact Us
          </Link>
          !
        </p>
      </div>
    </div>
  );
};

export default EventsPage;
