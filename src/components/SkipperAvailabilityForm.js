import React, { useState } from 'react';
import { addSkipperAvailability } from '../api/skipperAvailability';

function SkipperAvailabilityForm() {
  const [availability, setAvailability] = useState({
    skipper_id: '',
    week_start_date: '',
    week_end_date: '',
    availability_status: '',
  });

  const handleChange = (e) => setAvailability({ ...availability, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addSkipperAvailability(availability);
      alert('Availability added successfully!');
    } catch (error) {
      console.error('Error adding availability:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Skipper Availability</h2>
      <input type="text" name="skipper_id" placeholder="Skipper ID" onChange={handleChange} required />
      <input type="date" name="week_start_date" placeholder="Week Start Date" onChange={handleChange} required />
      <input type="date" name="week_end_date" placeholder="Week End Date" onChange={handleChange} required />
      <input type="text" name="availability_status" placeholder="Availability Status" onChange={handleChange} required />
      <button type="submit">Add Availability</button>
    </form>
  );
}

export default SkipperAvailabilityForm;
