import React, { useEffect, useState } from 'react';
import { getPorts, deletePort } from '../api/ports';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PortsList() {
  const [ports, setPorts] = useState([]);

  useEffect(() => {
    const fetchPorts = async () => {
      try {
        const data = await getPorts();
        setPorts(data);
      } catch (error) {
        console.error('Error fetching ports:', error.response?.data || error.message);
      }
    };
    fetchPorts();
  }, []);

  const handleDelete = async (portId) => {
    if (window.confirm('Are you sure you want to delete this port?')) {
      try {
        await deletePort(portId);
        setPorts(ports.filter(port => port.port_id !== portId));
        alert('Port deleted successfully!');
      } catch (error) {
        console.error('Error deleting port:', error.response?.data || error.message);
      }
    }
  };

  return (
    <Container>
      <h2 className="mt-4 mb-4">Ports List</h2>
      <Row>
        {ports.map(port => (
          <Col key={port.port_id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{port.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{port.country}</Card.Subtitle>
                <Card.Text>
                  <strong>Region:</strong> {port.region} <br />
                  <strong>City:</strong> {port.city}
                </Card.Text>
                <Button variant="danger" onClick={() => handleDelete(port.port_id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Link to="/ports/new">
        <Button variant="primary" className="mt-4">Add New Port</Button>
      </Link>
    </Container>
  );
}

export default PortsList;
