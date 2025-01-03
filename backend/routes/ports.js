const express = require('express');
const router = express.Router();
const portsController = require('../controllers/portsController');

router.get('/', portsController.getPorts);
router.post('/', portsController.addPort);

module.exports = router;
