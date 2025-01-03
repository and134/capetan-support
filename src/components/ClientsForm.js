import React, { useState } from 'react';
import { addClient } from '../api/clients';

function ClientsForm() {
  const [client, setClient] = useState({
    full_name: '',
    date_of_birth: '',
    card_information: '',
    interests: '',
    email_address: '',
    phone_number: '',
  });

  const handleChange = (e) => setClient({ ...client, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addClient(client);
      alert('Client added successfully!');
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Client</h2>
      <input type="text" name="full_name" placeholder="Full Name" onChange={handleChange} required />
      <input type="text" name="date_of_birth" placeholder="Date of Birth (YYYY-MM-DD)" onChange={handleChange} required />
      <input type="text" name="card_information" placeholder="Card Information" onChange={handleChange} required />
      <input type="text" name="interests" placeholder="Interests" onChange={handleChange} />
      <input type="email" name="email_address" placeholder="Email Address" onChange={handleChange} required />
      <input type="text" name="phone_number" placeholder="Phone Number" onChange={handleChange} />
      <button type="submit">Add Client</button>
    </form>
  );
}

export default ClientsForm;
