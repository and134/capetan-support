import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getClients } from '../api/clients';

function ClientsList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const data = await getClients();
      setClients(data);
    };
    fetchClients();
  }, []);

  return (
    <div>
      <h2>Clients List</h2>
      <table>
        <thead>
          <tr>
            <th>Client ID</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.client_id}>
              <td>{client.client_id}</td>
              <td>{client.full_name}</td>
              <td>{client.email_address}</td>
              <td>{client.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">
        <button style={{ marginTop: '20px' }}>Return to Home</button>
      </Link>
    </div>
  );
}

export default ClientsList;
