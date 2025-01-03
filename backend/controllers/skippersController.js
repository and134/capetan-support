const skippersModel = require('../models/skippersModel');

const getSkippers = async (req, res) => {
  try {
    const skippers = await skippersModel.getAllSkippers();
    res.status(200).json(skippers);
  } catch (err) {
    console.error('Error fetching skippers:', err);
    res.status(500).json({ error: 'Failed to fetch skippers' });
  }
};

const addSkipper = async (req, res) => {
  try {
    const skipperData = req.body;
    console.log('Received data:', skipperData);     
    const newSkipper = await skippersModel.addSkipper(skipperData);
    res.status(201).json(newSkipper);
  } catch (err) {
    console.error('Error adding skipper:', err);
    res.status(500).json({ error: 'Failed to add skipper' });
  }
};

module.exports = { getSkippers, addSkipper };
