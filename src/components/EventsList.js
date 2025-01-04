import React, { useEffect, useState } from 'react';
import { getEvents } from '../api/events';

function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Nautical Events List</h2>
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Number of Boats</th>
            <th>Number of Places</th>
            <th>Departure Port</th>
            <th>Starting Date</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.event_id}>
              <td>{event.event_name}</td>
              <td>{event.number_of_boats}</td>
              <td>{event.number_of_places}</td>
              <td>{event.departure_port_id}</td>
              <td>{event.starting_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventsList;
