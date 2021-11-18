const express = require('express');
const spoonacularController = require('../controllers/errorController');
const router = express.Router();

router.get('*', spoonacularController.getErrorPage);

module.exports = router;