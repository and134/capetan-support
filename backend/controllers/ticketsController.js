const ticketsModel = require('../models/ticketsModel');

const getTickets = async (req, res) => {
  try {
    const tickets = await ticketsModel.getAllTickets();
    res.status(200).json(tickets);
  } catch (err) {
    console.error('Error fetching tickets:', err);
    res.status(500).json({ error: 'Failed to fetch tickets' });
  }
};

const addTicket = async (req, res) => {
  try {
    const ticketData = req.body;
    const newTicket = await ticketsModel.addTicket(ticketData);
    res.status(201).json(newTicket);
  } catch (err) {
    console.error('Error adding ticket:', err);
    res.status(500).json({ error: 'Failed to add ticket' });
  }
};

module.exports = { getTickets, addTicket };
