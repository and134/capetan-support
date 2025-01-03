import React, { useEffect } from 'react';
import axios from 'axios';
import ClientsForm from './components/ClientsForm';

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
    </div>
  );
}

export default App;
