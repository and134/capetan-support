const pool = require('../db/db');

const getAllTickets = async () => {
  const result = await pool.query('SELECT * FROM Tickets');
  return result.rows;
};

const addTicket = async (ticketData) => {
    const { client_id, event_id, booking_date, price, ticket_type } = ticketData;
  
    const result = await pool.query(
      `INSERT INTO Tickets (client_id, event_id, booking_date, price, ticket_type)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [client_id, event_id, booking_date, price, ticket_type]
    );
    return result.rows[0];
  };
  

module.exports = { getAllTickets, addTicket };
