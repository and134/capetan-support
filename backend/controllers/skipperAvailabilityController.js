const skipperAvailabilityModel = require('../models/skipperAvailabilityModel');

const getSkipperAvailability = async (req, res) => {
  try {
    const availability = await skipperAvailabilityModel.getAllAvailability();
    res.status(200).json(availability);
  } catch (err) {
    console.error('Error fetching availability:', err);
    res.status(500).json({ error: 'Failed to fetch skipper availability' });
  }
};

const addSkipperAvailability = async (req, res) => {
  try {
    const availabilityData = req.body;
    const newAvailability = await skipperAvailabilityModel.addAvailability(availabilityData);
    res.status(201).json(newAvailability);
  } catch (err) {
    console.error('Error adding availability:', err);
    res.status(500).json({ error: 'Failed to add skipper availability' });
  }
};

module.exports = { getSkipperAvailability, addSkipperAvailability };
