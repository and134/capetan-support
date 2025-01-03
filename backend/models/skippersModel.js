const pool = require('../db/db');

const getAllSkippers = async () => {
  const result = await pool.query('SELECT * FROM skippers');
  return result.rows;
};

const addSkipper = async (skipperData) => {
  const {
    full_name, experience_courses, experience_weeks, home_city,
    country_of_work, region, season_start_date, season_end_date
  } = skipperData;

  const result = await pool.query(
    `INSERT INTO Skippers (full_name, experience_courses, experience_weeks, home_city, country_of_work, region, season_start_date, season_end_date)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    [full_name, experience_courses, experience_weeks, home_city, country_of_work, region, season_start_date, season_end_date]
  );
  return result.rows[0];
};

module.exports = { getAllSkippers, addSkipper };
