const eventSkippersModel = require('../models/eventSkippersModel');

const getEventSkippers = async (req, res) => {
  try {
    const eventSkippers = await eventSkippersModel.getAllEventSkippers();
    res.status(200).json(eventSkippers);
  } catch (err) {
    console.error('Error fetching event skippers:', err);
    res.status(500).json({ error: 'Failed to fetch event skippers' });
  }
};

const addEventSkipper = async (req, res) => {
  try {
    const eventSkipperData = req.body;
    const newEventSkipper = await eventSkippersModel.addEventSkipper(eventSkipperData);
    res.status(201).json(newEventSkipper);
  } catch (err) {
    console.error('Error adding event skipper:', err);
    res.status(500).json({ error: 'Failed to add event skipper' });
  }
};

module.exports = { getEventSkippers, addEventSkipper };

