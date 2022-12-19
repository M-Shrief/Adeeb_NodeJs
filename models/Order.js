const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  print: {
    type: Object,
    required: true
  },
  reviewed: {
    type: Boolean,
    default: false
  },
  backgroundColor: {
    type: String,
    default: '#000'
  },
  textType: {
    type: String,
    default: 'كوفي'
  },
  textColor: {
    type: String,
    default: '#fff'
  }
}, {timestamps: true})

const Order = mongoose.model('order', orderSchema);
module.exports = Order;