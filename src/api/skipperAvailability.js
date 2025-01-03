import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/skipperAvailability';

export const getAvailability = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addSkipperAvailability = async (availability) => {
  const response = await axios.post(BASE_URL, availability);
  return response.data;
};
