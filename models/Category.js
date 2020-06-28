const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  item_type: {
    type: String,
    required: true,
    uppercase: true,
    unique: true
  },
  color: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});

module.exports = Category = mongoose.model('category', CategorySchema);