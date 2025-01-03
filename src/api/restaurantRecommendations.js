import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/restaurantRecommendations';

export const getRestaurants = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addRestaurant = async (restaurant) => {
  const response = await axios.post(BASE_URL, restaurant);
  return response.data;
};
