// models/clothingModel.js (in your backend)
const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
  name: String,
  type: String, // e.g., jacket, shirt, pants
  gender: { type: String, enum: ['male', 'female'] }, // Gender-based clothing
  weather: { type: String, enum: ['summer', 'winter', 'rainy', 'spring', 'fall'] }, // Weather type
  imageUrl: String, // Image URL for the clothing item
});

const Clothing = mongoose.model('Clothing', clothingSchema);

module.exports = Clothing;
