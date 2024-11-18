// routes/clothingRoutes.js (in your backend)
const express = require('express');
const router = express.Router();
const clothingController = require('../controllers/ClothingController');

// Get clothing suggestions based on gender and weather
router.get('/clothing-suggestions', clothingController.getClothingSuggestions);

module.exports = router;
