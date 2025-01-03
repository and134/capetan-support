import React, { useState } from 'react';
import { addSkipper } from '../api/skippers';

function SkippersForm() {
  const [skipper, setSkipper] = useState({
    full_name: '',
    experience_courses: '',
    experience_weeks: '',
    home_city: '',
    country_of_work: '',
    region: '',
    season_start_date: '',
    season_end_date: '',
  });

  const handleChange = (e) => {
    setSkipper({ ...skipper, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addSkipper(skipper);
      alert('Skipper added successfully!');
    } catch (error) {
      console.error('Error adding skipper:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Skipper</h2>
      <input type="text" name="full_name" placeholder="Full Name" onChange={handleChange} required />
      <input type="number" name="experience_courses" placeholder="Experience Courses" onChange={handleChange} required />
      <input type="number" name="experience_weeks" placeholder="Experience Weeks" onChange={handleChange} required />
      <input type="text" name="home_city" placeholder="Home City" onChange={handleChange} required />
      <input type="text" name="country_of_work" placeholder="Country of Work" onChange={handleChange} required />
      <input type="text" name="region" placeholder="Region" onChange={handleChange} required />
      <input type="text" name="season_start_date" placeholder="Season Start Date (YYYY-MM-DD)" onChange={handleChange} required />
      <input type="text" name="season_end_date" placeholder="Season End Date (YYYY-MM-DD)" onChange={handleChange} required />
      <button type="submit">Add Skipper</button>
    </form>
  );
}

export default SkippersForm;
