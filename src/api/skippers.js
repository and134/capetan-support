import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/skippers';

export const getSkippers = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addSkipper = async (skipper) => {
  const response = await axios.post(BASE_URL, skipper);
  return response.data;
};
