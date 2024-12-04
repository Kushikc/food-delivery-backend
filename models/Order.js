const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true }],
  status: { type: String, default: 'Preparing', enum: ['Preparing', 'Out for Delivery', 'Delivered'] },
  customerName: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model('Order', OrderSchema);
