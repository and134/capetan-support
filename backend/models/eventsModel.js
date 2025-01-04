const pool = require('../db/db');

const getAllEvents = async () => {
  const result = await pool.query('SELECT * FROM Nautical_Events');
  return result.rows;
};

const addEvent = async (eventData) => {
  const { event_name, number_of_boats, number_of_places, departure_port_id, starting_date } = eventData;

  const result = await pool.query(
    `INSERT INTO Nautical_Events (event_name, number_of_boats, number_of_places, departure_port_id, starting_date)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [event_name, number_of_boats, number_of_places, departure_port_id, starting_date]
  );
  return result.rows[0];
};


module.exports = { getAllEvents, addEvent };
