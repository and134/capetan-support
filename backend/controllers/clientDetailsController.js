const clientDetailsModel = require('../models/clientDetailsModel');

const getClientDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await clientDetailsModel.getDetailsByClientId(id);
    res.status(200).json(details);
  } catch (err) {
    console.error('Error fetching client details:', err);
    res.status(500).json({ error: 'Failed to fetch client details' });
  }
};

const addClientDetails = async (req, res) => {
  try {
    const { client_id, trainer_evaluation, skipper_material } = req.body;
    await clientDetailsModel.addDetails({ client_id, trainer_evaluation, skipper_material });
    res.status(201).json({ message: 'Client details added successfully' });
  } catch (err) {
    console.error('Error adding client details:', err);
    res.status(500).json({ error: 'Failed to add client details' });
  }
};

const updateClientDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { trainer_evaluation, skipper_material } = req.body;
    await clientDetailsModel.updateDetails(id, { trainer_evaluation, skipper_material });
    res.status(200).json({ message: 'Client details updated successfully' });
  } catch (err) {
    console.error('Error updating client details:', err);
    res.status(500).json({ error: 'Failed to update client details' });
  }
};

module.exports = { getClientDetails, addClientDetails, updateClientDetails };
