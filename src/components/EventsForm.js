import React, { useState, useEffect } from 'react';
import { addEvent } from '../api/events';
import { getPorts } from '../api/ports';

function EventsForm() {
  const [ports, setPorts] = useState([]);
  const [event, setEvent] = useState({
    event_name: '',
  number_of_boats: '',
  number_of_places: '',
  departure_port_id: '',
  starting_date: ''
  });

  useEffect(() => {
    const fetchPorts = async () => {
      const response = await getPorts();
      setPorts(response);
    };
    fetchPorts();
  }, []);

  const handleChange = (e) => setEvent({ ...event, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEvent(event);
      alert('Event added successfully!');
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Event</h2>
      <input type="text" name="event_name" placeholder="Event Name" onChange={handleChange} required />
      <input type="number" name="number_of_boats" placeholder="Number of Boats" onChange={handleChange} required />
      <input type="number" name="number_of_places" placeholder="Number of Places" onChange={handleChange} required />
      <select name="departure_port_id" onChange={handleChange} required>
        <option value="">Select Departure Port</option>
        {ports.map(port => (
          <option key={port.port_id} value={port.port_id}>
            {port.name}
          </option>
        ))}
      </select>
      <input type="date" name="starting_date" placeholder="Starting Date" onChange={handleChange} required />
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventsForm;
