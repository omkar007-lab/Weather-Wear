
// backend/scripts/seedClothing.js 
const mongoose = require('mongoose'); 
const Clothing = require('../models/clothingModel'); // Import the Clothing model 
const clothingItems = [
  // Rainy weather clothing
  { name: 'Rain Jacket', type: 'jacket', gender: 'male', weather: 'rainy' },

  // Winter clothing for men
  { name: 'Down Jacket', type: 'jacket', gender: 'male', weather: 'winter' },
  { name: 'Winter Parka', type: 'jacket', gender: 'male', weather: 'winter' },
  { name: 'Wool Overcoat', type: 'jacket', gender: 'male', weather: 'winter' },
  { name: 'Peacoat', type: 'jacket', gender: 'male', weather: 'winter' },
  { name: 'Fleece-lined Jacket', type: 'jacket', gender: 'male', weather: 'winter' },
  { name: 'Waterproof Rain Jacket', type: 'jacket', gender: 'male', weather: 'winter' },
  { name: 'Trench Coat (Heavy-duty, wool-lined)', type: 'jacket', gender: 'male', weather: 'winter' },
  { name: 'Down Vest', type: 'jacket', gender: 'male', weather: 'winter' },
  { name: 'Puffer Coat', type: 'jacket', gender: 'male', weather: 'winter' },
  { name: 'Windbreaker Jacket', type: 'jacket', gender: 'male', weather: 'winter' },
  { name: 'Wool Sweater', type: 'shirt', gender: 'male', weather: 'winter' },
  { name: 'Cashmere Sweater', type: 'shirt', gender: 'male', weather: 'winter' },
  { name: 'Thermal T-shirt', type: 'shirt', gender: 'male', weather: 'winter' },
  { name: 'Flannel Shirt', type: 'shirt', gender: 'male', weather: 'winter' },
  { name: 'Hoodie (Fleece-lined)', type: 'shirt', gender: 'male', weather: 'winter' },
  { name: 'Turtleneck Sweater', type: 'shirt', gender: 'male', weather: 'winter' },
  { name: 'Heavyweight Henley Shirt', type: 'shirt', gender: 'male', weather: 'winter' },
  { name: 'Thermal-lined Jeans', type: 'bottom', gender: 'male', weather: 'winter' },
  { name: 'Wool Trousers', type: 'bottom', gender: 'male', weather: 'winter' },
  { name: 'Insulated Pants', type: 'bottom', gender: 'male', weather: 'winter' },

  // Winter clothing for women
  { name: 'Wool Coat', type: 'jacket', gender: 'female', weather: 'winter' },

  // Spring clothing for men
  { name: 'Lightweight Bomber Jacket', type: 'jacket', gender: 'male', weather: 'spring' },
  { name: 'Water-resistant Windbreaker', type: 'jacket', gender: 'male', weather: 'spring' },
  { name: 'Cotton Trench Coat', type: 'jacket', gender: 'male', weather: 'spring' },
  { name: 'Denim Jacket', type: 'jacket', gender: 'male', weather: 'spring' },
  { name: 'Field Jacket', type: 'jacket', gender: 'male', weather: 'spring' },
  { name: 'Cotton T-shirt', type: 'shirt', gender: 'male', weather: 'spring' },
  { name: 'Flannel Shirt', type: 'shirt', gender: 'male', weather: 'spring' },
  { name: 'Henley Shirt', type: 'shirt', gender: 'male', weather: 'spring' },
  { name: 'Linen Shirt', type: 'shirt', gender: 'male', weather: 'spring' },
  { name: 'Polo Shirt', type: 'shirt', gender: 'male', weather: 'spring' },
  { name: 'Chino Pants', type: 'bottom', gender: 'male', weather: 'spring' },
  { name: 'Slim-fit Jeans', type: 'bottom', gender: 'male', weather: 'spring' },
  { name: 'Khaki Shorts', type: 'bottom', gender: 'male', weather: 'spring' },
  { name: 'Lightweight Corduroy Pants', type: 'bottom', gender: 'male', weather: 'spring' },
  { name: 'Linen Pants', type: 'bottom', gender: 'male', weather: 'spring' },
  { name: 'Canvas Sneakers', type: 'footwear', gender: 'male', weather: 'spring' },
  { name: 'Loafers', type: 'footwear', gender: 'male', weather: 'spring' },
  { name: 'Desert Boots', type: 'footwear', gender: 'male', weather: 'spring' },
  { name: 'Slip-on Shoes', type: 'footwear', gender: 'male', weather: 'spring' },
  { name: 'Boat Shoes', type: 'footwear', gender: 'male', weather: 'spring' },

  // Summer clothing for men
  { name: 'Cotton T-shirt', type: 'shirt', gender: 'male', weather: 'summer' },
  { name: 'Linen Shirt', type: 'shirt', gender: 'male', weather: 'summer' },
  { name: 'Polo Shirt', type: 'shirt', gender: 'male', weather: 'summer' },
  { name: 'Short-sleeve Button-down Shirt', type: 'shirt', gender: 'male', weather: 'summer' },
  { name: 'Tank Top', type: 'shirt', gender: 'male', weather: 'summer' },
  { name: 'V-neck T-shirt', type: 'shirt', gender: 'male', weather: 'summer' },
  { name: 'Henley Shirt', type: 'shirt', gender: 'male', weather: 'summer' },
  { name: 'Chambray Shirt', type: 'shirt', gender: 'male', weather: 'summer' },
  { name: 'Rash Guard', type: 'shirt', gender: 'male', weather: 'summer' },
  { name: 'Breathable Performance Shirt', type: 'shirt', gender: 'male', weather: 'summer' },
  { name: 'Chino Shorts', type: 'bottom', gender: 'male', weather: 'summer' },
  { name: 'Cargo Shorts', type: 'bottom', gender: 'male', weather: 'summer' },
  { name: 'Denim Shorts', type: 'bottom', gender: 'male', weather: 'summer' },
  { name: 'Board Shorts', type: 'bottom', gender: 'male', weather: 'summer' },
  { name: 'Linen Pants', type: 'bottom', gender: 'male', weather: 'summer' },
  { name: 'Cotton Shorts', type: 'bottom', gender: 'male', weather: 'summer' },
  { name: 'Tailored Shorts', type: 'bottom', gender: 'male', weather: 'summer' },
  { name: 'Bermuda Shorts', type: 'bottom', gender: 'male', weather: 'summer' },
  { name: 'Jogger Shorts', type: 'bottom', gender: 'male', weather: 'summer' },
  { name: 'Hiking Shorts', type: 'bottom', gender: 'male', weather: 'summer' },
  { name: 'Flip-flops', type: 'footwear', gender: 'male', weather: 'summer' },
  { name: 'Sandals', type: 'footwear', gender: 'male', weather: 'summer' },
  { name: 'Boat Shoes', type: 'footwear', gender: 'male', weather: 'summer' },
  { name: 'Loafers', type: 'footwear', gender: 'male', weather: 'summer' },
  { name: 'Canvas Sneakers', type: 'footwear', gender: 'male', weather: 'summer' },
  { name: 'Espadrilles', type: 'footwear', gender: 'male', weather: 'summer' },
  { name: 'Slip-on Sneakers', type: 'footwear', gender: 'male', weather: 'summer' },
  { name: 'Sunglasses', type: 'accessory', gender: 'male', weather: 'summer' },
  { name: 'Baseball Cap', type: 'accessory', gender: 'male', weather: 'summer' },
  { name: 'Straw Hat', type: 'accessory', gender: 'male', weather: 'summer' },
  { name: 'Bucket Hat', type: 'accessory', gender: 'male', weather: 'summer' },
  { name: 'Canvas Backpack', type: 'accessory', gender: 'male', weather: 'summer' },
  { name: 'Waterproof Watch', type: 'accessory', gender: 'male', weather: 'summer' },
  { name: 'Belt (Canvas or Fabric)', type: 'accessory', gender: 'male', weather: 'summer' },


  // Rainy weather clothing for men
  { name: 'Waterproof Rain Jacket', type: 'jacket', gender: 'male', weather: 'rainy' },
  { name: 'Water-resistant Trench Coat', type: 'jacket', gender: 'male', weather: 'rainy' },
  { name: 'Waterproof Parka', type: 'jacket', gender: 'male', weather: 'rainy' },
  { name: 'Rain Poncho', type: 'jacket', gender: 'male', weather: 'rainy' },
  { name: 'Windbreaker Jacket', type: 'jacket', gender: 'male', weather: 'rainy' },
  { name: 'Waterproof Anorak Jacket', type: 'jacket', gender: 'male', weather: 'rainy' },
  { name: 'GORE-TEX Jacket', type: 'jacket', gender: 'male', weather: 'rainy' },
  { name: 'Rubberized Rain Coat', type: 'jacket', gender: 'male', weather: 'rainy' },
  { name: 'Fleece-lined Rain Jacket', type: 'jacket', gender: 'male', weather: 'rainy' },
  { name: 'Insulated Waterproof Jacket', type: 'jacket', gender: 'male', weather: 'rainy' },
  { name: 'Water-resistant Hoodie', type: 'shirt', gender: 'male', weather: 'rainy' },
  { name: 'Performance T-shirt (Moisture-wicking)', type: 'shirt', gender: 'male', weather: 'rainy' },
  { name: 'Long-sleeve Shirt (Water-resistant)', type: 'shirt', gender: 'male', weather: 'rainy' },
  { name: 'Thermal Base Layer', type: 'shirt', gender: 'male', weather: 'rainy' },
  { name: 'Water-resistant Windbreaker Shirt', type: 'shirt', gender: 'male', weather: 'rainy' },
  { name: 'Waterproof Pants', type: 'bottom', gender: 'male', weather: 'rainy' },
  { name: 'Water-resistant Cargo Pants', type: 'bottom', gender: 'male', weather: 'rainy' },
  { name: 'Waterproof Jeans', type: 'bottom', gender: 'male', weather: 'rainy' },
  { name: 'Rainproof Chinos', type: 'bottom', gender: 'male', weather: 'rainy' },
  { name: 'Water-resistant Joggers', type: 'bottom', gender: 'male', weather: 'rainy' },
  { name: 'Waterproof Boots', type: 'footwear', gender: 'male', weather: 'rainy' },
  { name: 'Rubber Rain Boots', type: 'footwear', gender: 'male', weather: 'rainy' },
  { name: 'Waterproof Sneakers', type: 'footwear', gender: 'male', weather: 'rainy' },
  { name: 'Waterproof Backpack', type: 'accessory', gender: 'male', weather: 'rainy' },
  { name: 'Compact Umbrella', type: 'accessory', gender: 'male', weather: 'rainy' },

  //femaleClothingItems for rainy
  // Outerwear 
  { name: 'Waterproof Rain Jacket', type: 'jacket', gender: 'female', weather: 'rainy' },
  { name: 'Waterproof Trench Coat', type: 'jacket', gender: 'female', weather: 'rainy' },
  { name: 'Rain Poncho', type: 'jacket', gender: 'female', weather: 'rainy' },
  { name: 'Water-resistant Parka', type: 'jacket', gender: 'female', weather: 'rainy' },
  { name: 'Windbreaker Jacket', type: 'jacket', gender: 'female', weather: 'rainy' },
  { name: 'Long Raincoat', type: 'jacket', gender: 'female', weather: 'rainy' },
  { name: 'GORE-TEX Jacket', type: 'jacket', gender: 'female', weather: 'rainy' },
  { name: 'Waterproof Anorak Jacket', type: 'jacket', gender: 'female', weather: 'rainy' },
  { name: 'Rubberized Rain Coat', type: 'jacket', gender: 'female', weather: 'rainy' },
  { name: 'Water-resistant Cape', type: 'jacket', gender: 'female', weather: 'rainy' },

  // Tops
  { name: 'Moisture-wicking T-shirt', type: 'shirt', gender: 'female', weather: 'rainy' },
  { name: 'Water-resistant Hoodie', type: 'shirt', gender: 'female', weather: 'rainy' },
  { name: 'Lightweight Sweater', type: 'shirt', gender: 'female', weather: 'rainy' },
  { name: 'Water-resistant Blouse', type: 'shirt', gender: 'female', weather: 'rainy' },
  { name: 'Long-sleeve Rain Shirt', type: 'shirt', gender: 'female', weather: 'rainy' },

  // Bottoms
  { name: 'Waterproof Pants', type: 'bottom', gender: 'female', weather: 'rainy' },
  { name: 'Water-resistant Trousers', type: 'bottom', gender: 'female', weather: 'rainy' },
  { name: 'Waterproof Leggings', type: 'bottom', gender: 'female', weather: 'rainy' },
  { name: 'Rain-resistant Skirt', type: 'bottom', gender: 'female', weather: 'rainy' },
  { name: 'Water-resistant Denim Jeans', type: 'bottom', gender: 'female', weather: 'rainy' },

  // Footwear
  { name: 'Waterproof Boots', type: 'footwear', gender: 'female', weather: 'rainy' },
  { name: 'Rubber Rain Boots', type: 'footwear', gender: 'female', weather: 'rainy' },
  { name: 'Waterproof Sneakers', type: 'footwear', gender: 'female', weather: 'rainy' },
  { name: 'Water-resistant Chelsea Boots', type: 'footwear', gender: 'female', weather: 'rainy' },
  { name: 'Waterproof Flats', type: 'footwear', gender: 'female', weather: 'rainy' },

  // Accessories
  { name: 'Compact Umbrella', type: 'accessory', gender: 'female', weather: 'rainy' },
  { name: 'Waterproof Handbag', type: 'accessory', gender: 'female', weather: 'rainy' },
  { name: 'Waterproof Gloves', type: 'accessory', gender: 'female', weather: 'rainy' },
  { name: 'Rain Hat (Water-resistant)', type: 'accessory', gender: 'female', weather: 'rainy' },
  { name: 'Waterproof Scarf', type: 'accessory', gender: 'female', weather: 'rainy' },
  { name: 'Boot Covers', type: 'accessory', gender: 'female', weather: 'rainy' },
  { name: 'Waterproof Socks', type: 'accessory', gender: 'female', weather: 'rainy' },
  { name: 'Waterproof Tote Bag', type: 'accessory', gender: 'female', weather: 'rainy' },
  { name: 'Rain Shield Poncho', type: 'accessory', gender: 'female', weather: 'rainy' },
  { name: 'Clear Umbrella', type: 'accessory', gender: 'female', weather: 'rainy' },

  // Layering & Additional Options
  { name: 'Rain Jacket Liner', type: 'layering', gender: 'female', weather: 'rainy' },
  { name: 'Waterproof Cardigan', type: 'layering', gender: 'female', weather: 'rainy' },
  { name: 'Waterproof Shawl', type: 'layering', gender: 'female', weather: 'rainy' },
  { name: 'Windproof Vest', type: 'layering', gender: 'female', weather: 'rainy' },
  { name: 'Waterproof Bikini (for beach or pool)', type: 'layering', gender: 'female', weather: 'rainy' },

// femaleClothingItems for summer
//topes
{ name: 'Cotton T-shirt', type: 'shirt', gender: 'female', weather: 'summer' },
{ name: 'Linen Shirt', type: 'shirt', gender: 'female', weather: 'summer' },
{ name: 'Tank Top', type: 'shirt', gender: 'female', weather: 'summer' },
{ name: 'V-neck T-shirt', type: 'shirt', gender: 'female', weather: 'summer' },
{ name: 'Sleeveless Blouse', type: 'shirt', gender: 'female', weather: 'summer' },
{ name: 'Off-the-Shoulder Top', type: 'shirt', gender: 'female', weather: 'summer' },
{ name: 'Button-down Shirt (Short-sleeve)', type: 'shirt', gender: 'female', weather: 'summer' },
{ name: 'Chambray Shirt', type: 'shirt', gender: 'female', weather: 'summer' },
{ name: 'Halter Neck Top', type: 'shirt', gender: 'female', weather: 'summer' },
{ name: 'Crop Top', type: 'shirt', gender: 'female', weather: 'summer' },

// Bottoms
{ name: 'Chino Shorts', type: 'bottom', gender: 'female', weather: 'summer' },
{ name: 'Denim Shorts', type: 'bottom', gender: 'female', weather: 'summer' },
{ name: 'Linen Pants', type: 'bottom', gender: 'female', weather: 'summer' },
{ name: 'Cotton Skirt', type: 'bottom', gender: 'female', weather: 'summer' },
{ name: 'Maxi Skirt', type: 'bottom', gender: 'female', weather: 'summer' },
{ name: 'Bermuda Shorts', type: 'bottom', gender: 'female', weather: 'summer' },
{ name: 'Flowy Wide-leg Pants', type: 'bottom', gender: 'female', weather: 'summer' },
{ name: 'Midi Skirt', type: 'bottom', gender: 'female', weather: 'summer' },
{ name: 'High-waisted Shorts', type: 'bottom', gender: 'female', weather: 'summer' },
{ name: 'Rompers/Jumpers', type: 'bottom', gender: 'female', weather: 'summer' },

// Footwear
{ name: 'Flip-flops', type: 'footwear', gender: 'female', weather: 'summer' },
{ name: 'Espadrilles', type: 'footwear', gender: 'female', weather: 'summer' },
{ name: 'Ballet Flats', type: 'footwear', gender: 'female', weather: 'summer' },
{ name: 'Strappy Sandals', type: 'footwear', gender: 'female', weather: 'summer' },
{ name: 'Wedges', type: 'footwear', gender: 'female', weather: 'summer' },
{ name: 'Slides', type: 'footwear', gender: 'female', weather: 'summer' },
{ name: 'Boat Shoes', type: 'footwear', gender: 'female', weather: 'summer' },

// Accessories
{ name: 'Sunglasses', type: 'accessory', gender: 'female', weather: 'summer' },
{ name: 'Straw Hat', type: 'accessory', gender: 'female', weather: 'summer' },
{ name: 'Beach Bag', type: 'accessory', gender: 'female', weather: 'summer' },
{ name: 'Lightweight Scarf', type: 'accessory', gender: 'female', weather: 'summer' },
{ name: 'Floppy Hat', type: 'accessory', gender: 'female', weather: 'summer' },
{ name: 'Tote Bag', type: 'accessory', gender: 'female', weather: 'summer' },
{ name: 'Belt (woven or fabric)', type: 'accessory', gender: 'female', weather: 'summer' },
{ name: 'Ankle Bracelets', type: 'accessory', gender: 'female', weather: 'summer' },
{ name: 'Sun Protection Gloves', type: 'accessory', gender: 'female', weather: 'summer' },
{ name: 'Crossbody Bag', type: 'accessory', gender: 'female', weather: 'summer' },

// Layering & Additional Options
{ name: 'Denim Jacket', type: 'layering', gender: 'female', weather: 'summer' },
{ name: 'Kimono or Cover-up', type: 'layering', gender: 'female', weather: 'summer' },
{ name: 'Light Cardigan', type: 'layering', gender: 'female', weather: 'summer' },

//femaleSpringClothingItems
// Tops
{ name: 'Lightweight Sweater', type: 'shirt', gender: 'female', weather: 'spring' },
{ name: 'Long-sleeve Cotton Shirt', type: 'shirt', gender: 'female', weather: 'spring' },
{ name: 'Blouse with Sleeves (Cotton or Linen)', type: 'shirt', gender: 'female', weather: 'spring' },
{ name: 'Tunic Top', type: 'shirt', gender: 'female', weather: 'spring' },
{ name: 'V-neck T-shirt', type: 'shirt', gender: 'female', weather: 'spring' },
{ name: 'Lightweight Hoodie', type: 'shirt', gender: 'female', weather: 'spring' },
{ name: 'Chiffon Blouse', type: 'shirt', gender: 'female', weather: 'spring' },
{ name: 'Cardigan', type: 'shirt', gender: 'female', weather: 'spring' },
{ name: 'Denim Shirt', type: 'shirt', gender: 'female', weather: 'spring' },
{ name: 'Polo Shirt', type: 'shirt', gender: 'female', weather: 'spring' },

// Bottoms
{ name: 'Chinos', type: 'bottom', gender: 'female', weather: 'spring' },
{ name: 'Denim Jeans', type: 'bottom', gender: 'female', weather: 'spring' },
{ name: 'Tapered Pants', type: 'bottom', gender: 'female', weather: 'spring' },
{ name: 'A-line Skirt', type: 'bottom', gender: 'female', weather: 'spring' },
{ name: 'Midi Skirt', type: 'bottom', gender: 'female', weather: 'spring' },
{ name: 'Linen Pants', type: 'bottom', gender: 'female', weather: 'spring' },
{ name: 'Wide-Legged Trousers', type: 'bottom', gender: 'female', weather: 'spring' },
{ name: 'Culottes', type: 'bottom', gender: 'female', weather: 'spring' },
{ name: 'Tailored Shorts', type: 'bottom', gender: 'female', weather: 'spring' },
{ name: 'Bootcut Jeans', type: 'bottom', gender: 'female', weather: 'spring' },

// Footwear
{ name: 'Ankle Boots', type: 'footwear', gender: 'female', weather: 'spring' },
{ name: 'Ballet Flats', type: 'footwear', gender: 'female', weather: 'spring' },
{ name: 'Strappy Sandals', type: 'footwear', gender: 'female', weather: 'spring' },
{ name: 'Espadrilles', type: 'footwear', gender: 'female', weather: 'spring' },
{ name: 'Sneakers', type: 'footwear', gender: 'female', weather: 'spring' },
{ name: 'Loafers', type: 'footwear', gender: 'female', weather: 'spring' },
{ name: 'Wedges', type: 'footwear', gender: 'female', weather: 'spring' },

// Outerwear
{ name: 'Lightweight Trench Coat', type: 'outerwear', gender: 'female', weather: 'spring' },
{ name: 'Denim Jacket', type: 'outerwear', gender: 'female', weather: 'spring' },
{ name: 'Waterproof Rain Jacket', type: 'outerwear', gender: 'female', weather: 'spring' },
{ name: 'Bomber Jacket', type: 'outerwear', gender: 'female', weather: 'spring' },
{ name: 'Utility Jacket', type: 'outerwear', gender: 'female', weather: 'spring' },
{ name: 'Blazer (Lightweight)', type: 'outerwear', gender: 'female', weather: 'spring' },
{ name: 'Kimono Cardigan', type: 'outerwear', gender: 'female', weather: 'spring' },
{ name: 'Cropped Jacket', type: 'outerwear', gender: 'female', weather: 'spring' },

// Accessories
{ name: 'Sunglasses', type: 'accessory', gender: 'female', weather: 'spring' },
{ name: 'Wide-brimmed Hat', type: 'accessory', gender: 'female', weather: 'spring' },
{ name: 'Scarf (Lightweight)', type: 'accessory', gender: 'female', weather: 'spring' },
{ name: 'Crossbody Bag', type: 'accessory', gender: 'female', weather: 'spring' },
{ name: 'Lightweight Gloves', type: 'accessory', gender: 'female', weather: 'spring' },

//femaleWinterClothingItems 
// Outerwear
{ name: 'Wool Coat', type: 'outerwear', gender: 'female', weather: 'winter' },
{ name: 'Puffer Jacket', type: 'outerwear', gender: 'female', weather: 'winter' },
{ name: 'Down Jacket', type: 'outerwear', gender: 'female', weather: 'winter' },
{ name: 'Faux Fur Coat', type: 'outerwear', gender: 'female', weather: 'winter' },
{ name: 'Peacoat', type: 'outerwear', gender: 'female', weather: 'winter' },
{ name: 'Trench Coat (Winter Version)', type: 'outerwear', gender: 'female', weather: 'winter' },
{ name: 'Parka Coat', type: 'outerwear', gender: 'female', weather: 'winter' },
{ name: 'Fleece-lined Jacket', type: 'outerwear', gender: 'female', weather: 'winter' },
{ name: 'Raincoat (Waterproof)', type: 'outerwear', gender: 'female', weather: 'winter' },
{ name: 'Military-style Coat', type: 'outerwear', gender: 'female', weather: 'winter' },

// Tops
{ name: 'Thermal Tops', type: 'shirt', gender: 'female', weather: 'winter' },
{ name: 'Cashmere Sweater', type: 'shirt', gender: 'female', weather: 'winter' },
{ name: 'Chunky Knit Sweater', type: 'shirt', gender: 'female', weather: 'winter' },
{ name: 'Turtleneck Sweater', type: 'shirt', gender: 'female', weather: 'winter' },
{ name: 'Long-Sleeve Henley Shirt', type: 'shirt', gender: 'female', weather: 'winter' },
{ name: 'Wool Cardigan', type: 'shirt', gender: 'female', weather: 'winter' },
{ name: 'Fleece Pullover', type: 'shirt', gender: 'female', weather: 'winter' },
{ name: 'Sweater Dress', type: 'shirt', gender: 'female', weather: 'winter' },
{ name: 'Thermal Long-Sleeve Shirt', type: 'shirt', gender: 'female', weather: 'winter' },
{ name: 'Flannel Shirt', type: 'shirt', gender: 'female', weather: 'winter' },

// Bottoms
{ name: 'Thermal Leggings', type: 'bottom', gender: 'female', weather: 'winter' },
{ name: 'Wool Trousers', type: 'bottom', gender: 'female', weather: 'winter' },
{ name: 'Jeans (Fleece-lined)', type: 'bottom', gender: 'female', weather: 'winter' },
{ name: 'Corduroy Pants', type: 'bottom', gender: 'female', weather: 'winter' },
{ name: 'Thermal or Fleece-lined Skirt', type: 'bottom', gender: 'female', weather: 'winter' },
{ name: 'Leather Pants', type: 'bottom', gender: 'female', weather: 'winter' },
{ name: 'Wool Skirt', type: 'bottom', gender: 'female', weather: 'winter' },
{ name: 'Snow Pants', type: 'bottom', gender: 'female', weather: 'winter' },
{ name: 'High-Waisted Wool Blend Pants', type: 'bottom', gender: 'female', weather: 'winter' },
{ name: 'Winter Tights (Fleece-lined)', type: 'bottom', gender: 'female', weather: 'winter' },

// Footwear
{ name: 'Insulated Boots', type: 'footwear', gender: 'female', weather: 'winter' },
{ name: 'Waterproof Winter Boots', type: 'footwear', gender: 'female', weather: 'winter' },
{ name: 'Shearling-lined Boots', type: 'footwear', gender: 'female', weather: 'winter' },
{ name: 'Thermal Socks', type: 'footwear', gender: 'female', weather: 'winter' },
{ name: 'Ankle Boots with Warm Lining', type: 'footwear', gender: 'female', weather: 'winter' },
{ name: 'Snow Boots', type: 'footwear', gender: 'female', weather: 'winter' },
{ name: 'Faux Fur Slippers', type: 'footwear', gender: 'female', weather: 'winter' },
{ name: 'Winter Hiking Boots', type: 'footwear', gender: 'female', weather: 'winter' },

// Accessories
{ name: 'Wool Scarf', type: 'accessory', gender: 'female', weather: 'winter' },
{ name: 'Cashmere Gloves', type: 'accessory', gender: 'female', weather: 'winter' },
{ name: 'Fleece Hat/Beanie', type: 'accessory', gender: 'female', weather: 'winter' },
{ name: 'Knitted Mittens', type: 'accessory', gender: 'female', weather: 'winter' },
{ name: 'Winter Headband', type: 'accessory', gender: 'female', weather: 'winter' },
{ name: 'Thermal Socks', type: 'accessory', gender: 'female', weather: 'winter' },
{ name: 'Turtleneck Sweater Dress', type: 'accessory', gender: 'female', weather: 'winter' },
{ name: 'Faux Fur Collar or Shawl', type: 'accessory', gender: 'female', weather: 'winter' },
{ name: 'Ear Warmers', type: 'accessory', gender: 'female', weather: 'winter' },
{ name: 'Snow Goggles', type: 'accessory', gender: 'female', weather: 'winter' },
{ name: 'Thermal Underwear', type: 'accessory', gender: 'female', weather: 'winter' },
{ name: 'Thermal Headband', type: 'accessory', gender: 'female', weather: 'winter' },

]

mongoose.connect('mongodb://localhost:27017/weather-wear', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Clear existing clothing data before seeding new data
    return Clothing.deleteMany({});
  })
  .then(() => {
    // Insert the sample clothing items into the collection
    return Clothing.insertMany(clothingItems);
  })
  .then(() => {
    console.log('Clothing data seeded successfully');
    
    // Close the database connection
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error seeding data:', err);
    
    // Ensure the connection is closed on error
    mongoose.connection.close();
  });