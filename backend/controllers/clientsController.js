const clientsModel = require('../models/clientsModel');

const getClients = async (req, res) => {
  try {
    const clients = await clientsModel.getAllClients();
    res.status(200).json(clients);
  } catch (err) {
    console.error('Error fetching clients:', err);
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
};

const addClient = async (req, res) => {
  try {
    const clientData = req.body;
    const newClient = await clientsModel.addClient(clientData);
    res.status(201).json(newClient);
  } catch (err) {
    console.error('Error adding client:', err);
    res.status(500).json({ error: 'Failed to add client' });
  }
};

module.exports = { getClients, addClient };
