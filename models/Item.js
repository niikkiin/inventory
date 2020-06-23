const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'user',
    },
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
      default: 0
    },
    unit: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: "none"
    },
    image: {
      type: String
    },
    status: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
	},
	{
		timestamps: true,
	}
);

module.exports = Item = mongoose.model('item', ItemSchema);


// few stock if quantity left is 10% of the original quantity
// in stock if quantity is not equal to 0