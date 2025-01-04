const pool = require('../db/db');

const getAllClients = async () => {
  const result = await pool.query('SELECT * FROM Clients');
  return result.rows;
};

// TODO: Validate data before inserting into the database
const addClient = async (clientData) => {
  const { full_name, date_of_birth, card_information, interests, email_address, phone_number } = clientData;
  const result = await pool.query(
    `INSERT INTO Clients (full_name, date_of_birth, card_information, interests, email_address, phone_number)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [full_name, date_of_birth, card_information, interests, email_address, phone_number]
  );
  return result.rows[0];
};

const getClientByName = async (name, page, per_page) => {
  const result = await pool.query('SELECT * FROM Clients WHERE full_name ILIKE $1 OFFSET ? LIMIT ?', [`%${name}`, (page - 1) * per_page, per_page]);
  return result.rows;
}

module.exports = { getAllClients, addClient, getClientByName };