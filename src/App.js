import React, { useEffect } from 'react';
import axios from 'axios';
import ClientsForm from './components/ClientsForm';
import SkippersForm from './components/SkipperForm';
import PortsForm from './components/PortsForm';

function App() {
  useEffect(() => {
    axios.get('/api/test')
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Nautical Events Management</h1>
      <ClientsForm />
      <SkippersForm />
      <PortsForm />
      
    </div>
  );
}

export default App;
