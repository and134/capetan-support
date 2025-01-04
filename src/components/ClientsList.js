import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getClients, deleteClient, updateClient} from '../api/clients';

function ClientsList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const data = await getClients();
      setClients(data);
    };
    fetchClients();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      await deleteClient(id);
      setClients(clients.filter(client => client.client_id !== id));
    }
  };

  const handleEdit = async (id) => {
    const fullName = prompt('Enter new full name:');
    const emailAddress = prompt('Enter new email address:');
    const phoneNumber = prompt('Enter new phone number:');
  
    if (fullName && emailAddress && phoneNumber) {
      await updateClient(id, { full_name: fullName, email_address: emailAddress, phone_number: phoneNumber });
      const updatedClients = clients.map(client =>
        client.client_id === id ? { ...client, full_name: fullName, email_address: emailAddress, phone_number: phoneNumber } : client
      );
      setClients(updatedClients);
    }
  };
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
              <td>
                <button onClick={() => handleDelete(client.client_id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleEdit(client.client_id)}>Edit</button>
              </td>
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
