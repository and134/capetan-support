import React from 'react';
import { Link } from 'react-router-dom';

function WelcomeScreen() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Capetan Skippers Elite</h1>
      <p>Manage clients, events, skippers, and more!</p>
      <Link to="/clients/new" style={{ marginRight: '10px' }}>
        <button>Go to Clients</button>
      </Link>
      <Link to="/events" style={{ marginRight: '10px' }}>
        <button>Go to Events</button>
      </Link>
      <Link to="/skippers">
        <button>Go to Skippers</button>
      </Link>
    </div>
  );
}

export default WelcomeScreen;
