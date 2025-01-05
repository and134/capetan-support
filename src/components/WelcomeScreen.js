import React from 'react';
import { Link } from 'react-router-dom';
import { Container , Row, Col, Button} from 'react-bootstrap';

function WelcomeScreen() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Capetan Skippers Elite</h1>
      <p>Manage clients, events, skippers, and more!</p>

      <Container>
        {/* First Row */}
        <Row className="mb-4">
          <Col>
            <Link to="/clients/new">
              <Button variant="info" size="lg" className="w-100"> Add Clients </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/events">
              <Button variant="info" size="lg" className="w-100"> View Events </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/skippers">
              <Button variant="info" size="lg" className="w-100"> Add Skippers </Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col>
            <Link to="/clients">
              <Button variant="info" size="lg" className="w-100"> View Clients </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/events">
              <Button variant="info" size="lg" className="w-100"> View Events </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WelcomeScreen;
