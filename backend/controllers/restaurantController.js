const restaurantModel = require('../models/restaurantModel');

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await restaurantModel.getAllRestaurants();
    res.status(200).json(restaurants);
  } catch (err) {
    console.error('Error fetching restaurants:', err);
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
};

const addRestaurant = async (req, res) => {
  try {
    const restaurantData = req.body;
    const newRestaurant = await restaurantModel.addRestaurant(restaurantData);
    res.status(201).json(newRestaurant);
  } catch (err) {
    console.error('Error adding restaurant:', err);
    res.status(500).json({ error: 'Failed to add restaurant' });
  }
};

module.exports = { getRestaurants, addRestaurant };
