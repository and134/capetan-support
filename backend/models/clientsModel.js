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


const addClientWithTransaction = async (clientData) => {
  const clientQuery = `INSERT INTO Clients (full_name, date_of_birth, card_information, interests, email_address, phone_number)
                       VALUES ($1, $2, $3, $4, $5, $6) RETURNING client_id`;

  const logQuery = `INSERT INTO Logs (client_id, action) VALUES ($1, $2)`;

  const client = await pool.connect(); 

  try {
    await client.query('BEGIN');

    const clientResult = await client.query(clientQuery, [
      clientData.full_name,
      clientData.date_of_birth,
      clientData.card_information,
      clientData.interests,
      clientData.email_address,
      clientData.phone_number,
    ]);

    const clientId = clientResult.rows[0].client_id;

    await client.query(logQuery, [clientId, 'Client added']);

    await client.query('COMMIT');
    return { client_id: clientId };
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Transaction failed:', error);
    throw error;
  } finally {
    client.release(); 
  }
};

const deleteClientById = async (id) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN'); 
    await client.query('DELETE FROM Tickets WHERE client_id = $1', [id]);
    await client.query('DELETE FROM Logs WHERE client_id = $1', [id]);
    await client.query('DELETE FROM Clients WHERE client_id = $1', [id]);

    await client.query('COMMIT'); 
  } catch (error) {
    await client.query('ROLLBACK'); 
    throw error;
  } finally {
    client.release();
  }
};


const updateClientById = async (id, clientData) => {
  const { full_name, email_address, phone_number } = clientData;
  
  await pool.query(
    `UPDATE Clients SET full_name = $1, email_address = $2, phone_number = $3 WHERE client_id = $4`,
    [full_name, email_address, phone_number, id]
  );
};
module.exports = { getAllClients, addClient, getClientByName , addClientWithTransaction, deleteClientById, updateClientById };

