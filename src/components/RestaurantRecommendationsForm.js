import React, { useState } from 'react';
import { addRestaurant } from '../api/restaurantRecommendations';

function RestaurantRecommendationsForm() {
  const [restaurant, setRestaurant] = useState({
    name: '',
    port_id: '',
    phone_number: '',
  });

  const handleChange = (e) => setRestaurant({ ...restaurant, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRestaurant(restaurant);
      alert('Restaurant added successfully!');
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Restaurant Recommendation</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="port_id" placeholder="Port ID" onChange={handleChange} required />
      <input type="text" name="phone_number" placeholder="Phone Number" onChange={handleChange} required />
      <button type="submit">Add Restaurant</button>
    </form>
  );
}

export default RestaurantRecommendationsForm;
