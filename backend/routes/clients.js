const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');

router.get('/', clientsController.getClients);
router.get('/:id', clientsController.getClientById);
router.post('/', clientsController.addClient);
router.delete('/:id', clientsController.deleteClient);
router.put('/:id', clientsController.updateClient);

module.exports = router;
