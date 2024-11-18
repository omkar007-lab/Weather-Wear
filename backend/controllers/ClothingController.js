// controllers/clothingController.js
const Clothing = require('../models/clothingModel');

const getClothingSuggestions = async (req, res) => {
  const { gender, weather } = req.query; // Get gender and weather from query parameters
  
  try {
    const clothing = await Clothing.find({ gender, weather });

    // If no clothing found for the given criteria
    if (clothing.length === 0) {
      return res.status(404).json({ message: 'No clothing found for the given criteria' });
    }

    res.json(clothing);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching clothing data', error: error.message });
  }
};

module.exports = { getClothingSuggestions };
