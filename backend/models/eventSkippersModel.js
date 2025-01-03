const pool = require('../db/db');

const getAllEventSkippers = async () => {
  const result = await pool.query('SELECT * FROM Event_Skippers');
  return result.rows;
};

const addEventSkipper = async (eventSkipperData) => {
  const { event_id, skipper_id } = eventSkipperData;
  const result = await pool.query(
    `INSERT INTO Event_Skippers (event_id, skipper_id)
     VALUES ($1, $2) RETURNING *`,
    [event_id, skipper_id]
  );
  return result.rows[0];
};

module.exports = { getAllEventSkippers, addEventSkipper };

