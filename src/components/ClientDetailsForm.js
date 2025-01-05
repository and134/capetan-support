import React, { useState } from 'react';
import axios from 'axios';

function ClientDetailsForm({ clientId }) {
  const [details, setDetails] = useState({
    trainer_evaluation: '',
    skipper_material: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: name === 'skipper_material' ? e.target.checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/clientDetails', {
        client_id: clientId,
        ...details,
      });
      alert('Client details added successfully!');
    } catch (error) {
      console.error('Error adding client details:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Client Details</h2>
      <input
        type="text"
        name="trainer_evaluation"
        placeholder="trainer_evaluation"
        value={details.trainer_evaluation}
        onChange={handleChange}
        required
      />
      <label>
        Skipper Material:
        <input
          type="checkbox"
          name="skipper_material"
          checked={details.skipper_material}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Details</button>
    </form>
  );
}

export default ClientDetailsForm;
