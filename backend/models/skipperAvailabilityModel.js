const pool = require('../db/db');

const getAllAvailability = async () => {
  const result = await pool.query('SELECT * FROM Skipper_Availability');
  return result.rows;
};

const addAvailability = async (availabilityData) => {
  const { skipper_id, week_start_date, week_end_date, availability_status } = availabilityData;
  const result = await pool.query(
    `INSERT INTO Skipper_Availability (skipper_id, week_start_date, week_end_date, availability_status)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [skipper_id, week_start_date, week_end_date, availability_status]
  );
  return result.rows[0];
};

module.exports = { getAllAvailability, addAvailability };
