const express = require('express');
const router = express.Router();

// validator
const { check, validationResult } = require('express-validator');

// auth middleware
const auth = require('../../middleware/auth');

// models
const Category = require('../../models/Category');

// @route     POST api/category
// @desc      Add a category
// @access    Private
router.post(
	'/',
	[
		auth,
		[
			check('item_type', 'Category name is required.').not().isEmpty(),
			check('color', 'Color is required.').not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const { item_type, color } = req.body;

			if (item_type) {
				return res.status(400).json({ errors: [{ msg: 'Category already exist.' }] });
			}

			const newCategory = new Category({
				item_type,
				color,
			});

			const category = await newCategory.save();

			res.json(category);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error.');
		}
	}
);

// @route     GET api/category
// @desc      Get all item
// @access    Private
router.get('/', auth, async (req, res) => {
	try {
		const categories = await Category.find().sort({ date: -1 });
		if (!categories.length) {
			return res.status(404).json({ errors: [{ msg: 'No categories added yet.' }] });
		}
		res.json(categories);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error.');
	}
});

module.exports = router;
