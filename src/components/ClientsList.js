import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getClients, deleteClient, updateClient } from '../api/clients';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

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
    <Container>
      <h2 className="mt-4 mb-4">Clients List</h2>
      <Row>
        {clients.map(client => (
          <Col key={client.client_id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{client.full_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{client.email_address}</Card.Subtitle>
                <Card.Text>
                  <strong>Phone:</strong> {client.phone_number}
                </Card.Text>
                <Button variant="danger" onClick={() => handleDelete(client.client_id)}>Delete</Button>
                <Button variant="primary" className="ms-2" onClick={() => handleEdit(client.client_id)}>Edit</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Link to="/">
        <Button variant="secondary" className="mt-4">Return to Home</Button>
      </Link>
    </Container>
  );
}

export default ClientsList;
