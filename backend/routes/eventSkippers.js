const express = require('express');
const router = express.Router();
const eventSkippersController = require('../controllers/eventSkippersController');

router.get('/', eventSkippersController.getEventSkippers);
router.post('/', eventSkippersController.addEventSkipper);

module.exports = router;
