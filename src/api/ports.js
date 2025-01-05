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

export const deletePort = async (portId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${portId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting port:', error.response?.data || error.message);
    throw error;
  }
};