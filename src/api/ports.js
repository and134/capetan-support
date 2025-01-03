import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/ports';

export const getPorts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addPort = async (port) => {
  const response = await axios.post(BASE_URL, port);
  return response.data;
};
