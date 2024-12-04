const MenuItem = require('../models/MenuItem');

// Add or Update Menu Item
exports.addMenuItem = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    if (!name || price < 0 || !['Starter', 'Main Course', 'Dessert', 'Drink'].includes(category)) {
      return res.status(400).json({ message: 'Invalid menu item data.' });
    }
    const menuItem = await MenuItem.findOneAndUpdate({ name }, req.body, { upsert: true, new: true });
    res.status(201).json(menuItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Menu
exports.getMenu = async (req, res) => {
  try {
    const menu = await MenuItem.find();
    res.json(menu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
