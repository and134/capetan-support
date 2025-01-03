import React, { useState } from 'react';
import { addEventSkipper } from '../api/eventSkippers';

function EventSkippersForm() {
  const [eventSkipper, setEventSkipper] = useState({
    event_id: '',
    skipper_id: '',
  });

  const handleChange = (e) => setEventSkipper({ ...eventSkipper, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEventSkipper(eventSkipper);
      alert('Event Skipper added successfully!');
    } catch (error) {
      console.error('Error adding event skipper:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Event Skipper</h2>
      <input type="text" name="event_id" placeholder="Event ID" onChange={handleChange} required />
      <input type="text" name="skipper_id" placeholder="Skipper ID" onChange={handleChange} required />
      <button type="submit">Add Event Skipper</button>
    </form>
  );
}

export default EventSkippersForm;
