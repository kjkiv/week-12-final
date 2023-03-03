const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
  name: String,
  email: String,
  active: Boolean
}, {
  timestamps: true
});

module.exports = mongoose.model('Customer', CustomerSchema);
