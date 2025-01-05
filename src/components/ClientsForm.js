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

  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addClient(client);
      alert('Client added successfully!');
      setClient({
        full_name: '',
        date_of_birth: '',
        card_information: '',
        interests: '',
        email_address: '',
        phone_number: '',
      });
    } catch (error) {
      console.error('Error adding client:', error);
      alert('Failed to add client. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Client</h2>

      <input
        type="text"
        name="full_name"
        placeholder="Full Name"
        value={client.full_name}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date_of_birth"
        placeholder="Date of Birth"
        value={client.date_of_birth}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="card_information"
        placeholder="Card Information"
        value={client.card_information}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="interests"
        placeholder="Interests"
        value={client.interests}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email_address"
        placeholder="Email Address"
        value={client.email_address}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone_number"
        placeholder="Phone Number"
        value={client.phone_number}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Client</button>
    </form>
  );
}

export default ClientsForm;
