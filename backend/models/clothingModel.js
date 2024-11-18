// models/clothingModel.js
const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // e.g., jacket, shirt, pants
  gender: { type: String, enum: ['male', 'female'], required: true }, // Gender-based clothing
  weather: { type: String, enum: ['summer', 'winter', 'rainy', 'spring', 'fall'], required: true }, // Weather type
  imageUrl: { type: String, required: true }, // Image URL for the clothing item
});

const Clothing = mongoose.model('Clothing', clothingSchema);

module.exports = Clothing;
