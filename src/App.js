import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import ClientsForm from './components/ClientsForm';
import ClientsList from './components/ClientsList';
import EventsForm from './components/EventsForm';
import SkippersForm from './components/SkipperForm';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/clients" style={{ marginRight: '10px' }}>Clients</Link>
          <Link to="/events" style={{ marginRight: '10px' }}>Events</Link>
          <Link to="/skippers">Skippers</Link>
        </nav>

        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/clients" element={<ClientsList />} />
          <Route path="/clients/new" element={<ClientsForm />} />
          <Route path="/events" element={<EventsForm />} />
          <Route path="/skippers" element={<SkippersForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
