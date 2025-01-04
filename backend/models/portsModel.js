const pool = require('../db/db');

const getAllPorts = async () => {
    const result = await pool.query('SELECT * FROM Ports');
    return result.rows;
};

const addPort = async (portData) => {
  const { name, country, region, city } = portData;

  console.log('SQL insert data:', portData);

  const result = await pool.query(
    `INSERT INTO Ports (name, country, region, city)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [name, country, region, city]
  );
  return result.rows[0];
};

module.exports = { getAllPorts, addPort };
