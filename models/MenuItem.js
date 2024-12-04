const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true, enum: ['Starter', 'Main Course', 'Dessert', 'Drink'] },
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
