const express = require('express');
const router = express.Router();

// validator
const { check, validationResult } = require('express-validator');

// auth middleware
const auth = require('../../middleware/auth');

// models
const Item = require('../../models/Item');
const User = require('../../models/User');

// @route     POST api/items
// @desc      Add an item
// @access    Private
router.post(
	'/',
	[
		auth,
		[
			check('name', 'Item name is required.').not().isEmpty(),
			check('category', 'Category is required.').not().isEmpty(),
			check('quantity', 'Quantity is required.').not().isEmpty(),
			check('unit', 'Unit is required.').not().isEmpty(),
			check('purchasePricePerUnit', 'Purchase Price per Unit is required.').not().isEmpty(),
			check('sellingPricePerUnit', 'Selling Price per Unit is required.').not().isEmpty(),
			check('lowStockReminder', 'Low Stock Reminder is required.').not().isEmpty()
		],
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const user = await (await User.findById(req.user.id)).isSelected('-password');

			const { name, category, quantity, unit, purchasePricePerUnit, sellingPricePerUnit, barcode, lowStockReminder, description, image, quantityLeft, status, date } = req.body;

			const newItem = new Item({
				name,
				category,
				quantity,
				unit,
				purchasePricePerUnit,
				sellingPricePerUnit,
				barcode,
				lowStockReminder,
				description,
				image,
				quantityLeft,
				status,
				date,
			});

			const item = await newItem.save();

			res.json(item);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error.');
		}
	}
);

// @route     GET api/items
// @desc      Get all item
// @access    Private
router.get('/', auth, async (req, res) => {
	try {
		const items = await Item.find().sort({ date: -1 });
		if(!items.length){
			return res.status(404).json({ errors: [{ msg: 'No items added yet.' }] });
		}
		res.json(items);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error.');
	}
});

// @route     GET api/items/:id
// @desc      Get item by id
// @access    Private
router.get('/:id', auth, async (req, res) => {
	try {
		const item = await Item.findById(req.params.id);

		if(!item){
			return res.status(404).json({ errors: [{ msg: 'Item not found.' }] });
		}

		res.json(item	);
	} catch (err) {
		console.error(err.message);
		if(err.kind === 'ObjectId'){
			return res.status(404).json({ errors: [{ msg: 'Item not found.' }] });
		}
		res.status(500).send('Server Error.');
	}
});

// @route     DELETE api/items/:id
// @desc      Delete item by id
// @access    Private
router.delete('/:id', auth, async (req, res) => {
	try {
		const item = await Item.findById(req.params.id);

		await item.remove();

		res.json({ msg: 'Item removed.'});
	} catch (err) {
		console.error(err.message);
		if(err.kind === 'ObjectId'){
			return res.status(404).json({ errors: [{ msg: 'Item not found.' }] });
		}
		res.status(500).send('Server Error.');
	}
});

module.exports = router;
