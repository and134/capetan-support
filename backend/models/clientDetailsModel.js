const pool = require('../db/db');

const getDetailsByClientId = async (id) => {
  const result = await pool.query('SELECT * FROM ClientDetails WHERE client_id = $1', [id]);
  return result.rows[0];
};

const addDetails = async (details) => {
  const { client_id, trainer_evaluation, skipper_material } = details;
  await pool.query(
    `INSERT INTO ClientDetails (client_id, trainer_evaluation, skipper_material) VALUES ($1, $2, $3)`,
    [client_id, trainer_evaluation, skipper_material]
  );
};

const updateDetails = async (id, details) => {
  const { trainer_evaluation, skipper_material } = details;
  await pool.query(
    `UPDATE ClientDetails SET trainer_evaluation = $1, skipper_material = $2 WHERE client_id = $3`,
    [trainer_evaluation, skipper_material, id]
  );
};

module.exports = { getDetailsByClientId, addDetails, updateDetails };
