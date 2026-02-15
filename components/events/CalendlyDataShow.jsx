"use client";
import React, { useEffect, useState } from "react";

const CenediyDatashow = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/calendly/events", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `Error: ${response.status} - ${errorData.title || response.statusText}`
          );
        }

        const data = await response.json();
        setEvents(data.collection || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Calendly Event Data</h1>
      {error && <p>Error: {error}</p>}
      {!error && events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.uri}>{event.name || event.start_time}</li>
          ))}
        </ul>
      ) : (
        !error && <p>No events found</p>
      )}
    </div>
  );
};

export default CenediyDatashow;
