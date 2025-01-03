import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/clients';

export const getClients = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addClient = async (client) => {
  const response = await axios.post(BASE_URL, client);
  return response.data;
};
