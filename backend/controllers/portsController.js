const portsModel = require('../models/portsModel');

const getPorts = async (req, res) => {
  try {
    const ports = await portsModel.getAllPorts();
    res.status(200).json(ports);
  } catch (err) {
    console.error('Error fetching ports:', err);
    res.status(500).json({ error: 'Failed to fetch ports' });
  }
};

const addPort = async (req, res) => {
  try {
    const portData = req.body;
    console.log('Received data:', portData); // Log received data
    const newPort = await portsModel.addPort(portData);
    res.status(201).json(newPort);
  } catch (err) {
    console.error('Error adding port:', err);
    res.status(500).json({ error: 'Failed to add port', details: err.message });
  }
};

module.exports = { getPorts, addPort };
