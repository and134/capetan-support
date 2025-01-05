import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import ClientsForm, { EditClientForm} from './components/ClientsForm';
import ClientsList from './components/ClientsList';
import EventsForm from './components/EventsForm';
import SkippersForm from './components/SkipperForm';
import EventsList from './components/EventsList';
import AppNavbar from './components/AppNavBar';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/clients" element={<ClientsList />} />
        <Route path="/clients/new" element={<ClientsForm />} />
        <Route path="/clients/:clientId/edit" element={<EditClientForm />} />
        <Route path="/events" element={<EventsList />} />
        <Route path="/events/new" element={<EventsForm />} />
        <Route path="/skippers" element={<SkippersForm />} />
      </Routes>
    </Router>



  );
}

export default App;
