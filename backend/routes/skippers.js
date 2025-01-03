const express = require('express');
const router = express.Router();
const skippersController = require('../controllers/skippersController');

router.get('/', skippersController.getSkippers);
router.post('/', skippersController.addSkipper);

module.exports = router;
