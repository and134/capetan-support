const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');

router.get('/', clientsController.getClients);
router.post('/', clientsController.addClient);
router.delete('/:id', clientsController.deleteClient);
router.put('/:id', clientsController.updateClient);

module.exports = router;
