import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/tickets';

export const getTickets = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addTicket = async (client) => {
  const response = await axios.post(BASE_URL, client);
  return response.data;
};
