const express = require('express');
const router = express.Router();
const clientDetailsController = require('../controllers/clientDetailsController');

router.get('/:id', clientDetailsController.getClientDetails);
router.post('/', clientDetailsController.addClientDetails);
router.put('/:id', clientDetailsController.updateClientDetails);

module.exports = router;
