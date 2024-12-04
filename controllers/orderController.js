const Order = require('../models/Order');
const MenuItem = require('../models/MenuItem');

// Place Order
exports.placeOrder = async (req, res) => {
  try {
    const { items, customerName, address } = req.body;

    // Validate if all item IDs exist
    const menuItems = await MenuItem.find({ _id: { $in: items } });
    if (menuItems.length !== items.length) {
      return res.status(400).json({ message: 'Invalid item IDs.' });
    }

    const order = new Order({ items, customerName, address });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Order by ID
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items');
    if (!order) return res.status(404).json({ message: 'Order not found.' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
