const eventsModel = require('../models/eventsModel');

const getEvents = async (req, res) => {
  try {
    const events = await eventsModel.getAllEvents();
    res.status(200).json(events);
  } catch (err) {
    console.error('Error fetching events:', err);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};

const addEvent = async (req, res) => {
  try {
    const eventData = req.body;
    const newEvent = await eventsModel.addEvent(eventData);
    res.status(201).json(newEvent);
  } catch (err) {
    console.error('Error adding event:', err);
    res.status(500).json({ error: 'Failed to add event' });
  }
};

module.exports = { getEvents, addEvent };
