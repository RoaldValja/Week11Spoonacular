const express = require('express');
const spoonacularController = require('../controllers/mainController');
const router = express.Router();

router.get('/', spoonacularController.getHomePage);

module.exports = router;