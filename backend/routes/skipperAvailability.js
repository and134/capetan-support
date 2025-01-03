const express = require('express');
const router = express.Router();
const skipperAvailabilityController = require('../controllers/skipperAvailabilityController');

router.get('/', skipperAvailabilityController.getSkipperAvailability);
router.post('/', skipperAvailabilityController.addSkipperAvailability);

module.exports = router;
