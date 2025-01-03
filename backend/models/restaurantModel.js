const pool = require('../db/db');

const getAllRestaurants = async () => {
  const result = await pool.query('SELECT * FROM Restaurant_Recommendations');
  return result.rows;
};

const addRestaurant = async (restaurantData) => {
  const { name, port_id, phone_number } = restaurantData;

  const result = await pool.query(
    `INSERT INTO Restaurant_Recommendations (name, port_id, phone_number)
     VALUES ($1, $2, $3) RETURNING *`,
    [name, port_id, phone_number]
  );
  return result.rows[0];
};

module.exports = { getAllRestaurants, addRestaurant };
