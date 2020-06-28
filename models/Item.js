const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'user',
		},
		date: {
			type: Date,
			default: Date.now,
		},
		name: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
			min: 0,
			default: 0,
		},
		unit: {
			type: String,
			required: true,
		},
		purchasePricePerUnit: {
			type: Number,
			required: true,
			min: 0,
			default: 0,
		},
		sellingPricePerUnit: {
			type: Number,
			required: true,
			min: 0,
			default: 0,
		},
		barcode: {
			type: String,
			required: true,
		},
		lowStockReminder: {
			type: Number,
			required: true,
			min: 0,
			default: 0,
		},
		description: {
			type: String,
			default: 'none',
		},
		image: {
			type: String,
		},
		quantityLeft: {
			type: Number,
			min: 0,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

// category
// category: {
// 	type: String,
// 	ref: 'category',
// 	required: true
// }

module.exports = Item = mongoose.model('item', ItemSchema);

// few stock if quantity left is 10% of the original quantity
// in stock if quantity is not equal to 0
