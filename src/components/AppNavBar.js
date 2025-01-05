import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar expand="lg" bg = "dark" data-bs-theme="dark" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand as={Link} to="/"> Capetan Skippers Elite </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Add Logs" id="add-logs-dropdown">
              <NavDropdown.Item as={Link} to="/clients/new"> New Client </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events/new"> New Event </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="View Logs" id="view-logs-dropdown">
              <NavDropdown.Item as={Link} to="/clients"> Clients List </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events"> Events List </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
