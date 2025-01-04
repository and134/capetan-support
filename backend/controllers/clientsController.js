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
    const newClient = await clientsModel.addClientWithTransaction(clientData);
    res.status(201).json(newClient);
  } catch (err) {
    console.error('Error adding client:', err);
    res.status(500).json({ error: 'Failed to add client' });
  }
};

const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    await clientsModel.deleteClientById(id);
    res.status(200).json({ message: 'Client deleted successfully' });
  } catch (err) {
    console.error('Error deleting client:', err);
    res.status(500).json({ error: 'Failed to delete client' });
  }
};

const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { full_name, email_address, phone_number } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Client ID is required' });
    }

    await clientsModel.updateClientById(id, { full_name, email_address, phone_number });
    res.status(200).json({ message: 'Client updated successfully' });
  } catch (err) {
    console.error('Error updating client:', err);
    res.status(500).json({ error: 'Failed to update client' });
  }
};


module.exports = { getClients, addClient, deleteClient, updateClient};