import React, { useState } from 'react';
import { addPort } from '../api/ports';

function PortsForm() {
  const [port, setPort] = useState({
    name: '',
    country: '',
    region: '',
    city: '',
  });

  const handleChange = (e) => {
    setPort({ ...port, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPort(port);
      alert('Port added successfully!');
    } catch (error) {
      console.error('Error adding port:', error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Port</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="country" placeholder="Country" onChange={handleChange} required />
      <input type="text" name="region" placeholder="Region" onChange={handleChange} required />
      <input type="text" name="city" placeholder="City" onChange={handleChange} required />
      <button type="submit">Add Port</button>
    </form>
  );
}

export default PortsForm;
