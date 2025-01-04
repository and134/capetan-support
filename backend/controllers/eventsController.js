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
    const { event_name, number_of_boats, number_of_places, departure_port_id, starting_date } = req.body;

    if (!event_name || !number_of_boats || !number_of_places || !departure_port_id || !starting_date) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newEvent = await eventsModel.addEvent(req.body);
    res.status(201).json(newEvent);
  } catch (err) {
    console.error('Error adding event:', err);
    res.status(500).json({ error: 'Failed to add event' });
  }
};

module.exports = { getEvents, addEvent };
