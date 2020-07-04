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
			check('color', 'Color is required.').not().isEmpty(),
			check('item_type', 'Category name is required.')
				.not()
				.isEmpty()
				.custom((value, { req }) => {
					return new Promise((resolve, reject) => {
						Category.findOne({ item_type: req.body.item_type }, function (err, item_type) {
							if (err) {
								reject(new Error('Server Error'));
							}
							if (Boolean(item_type)) {
								reject(new Error('Catergory already exists.'));
							}
							resolve(true);
						});
					});
				}),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const { item_type, color } = req.body;

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

// @route     GET api/categories/:id
// @desc      Get item by id
// @access    Private
router.get('/:id', auth, async (req, res) => {
	try {
		const category = await Category.findById(req.params.id);

		if(!category){
			return res.status(404).json({ errors: [{ msg: 'Category not found.' }] });
		}

		res.json(category);
	} catch (err) {
		console.error(err.message);
		if(err.kind === 'ObjectId'){
			return res.status(404).json({ errors: [{ msg: 'Category not found.' }] });
		}
		res.status(500).send('Server Error.');
	}
});

// @route     DELETE api/categories/:id
// @desc      Delete item by id
// @access    Private
router.delete('/:id', auth, async (req, res) => {
	try {
		const category = await Category.findById(req.params.id);

		await category.remove();

		res.json({ msg: 'Category removed.'});
	} catch (err) {
		console.error(err.message);
		if(err.kind === 'ObjectId'){
			return res.status(404).json({ errors: [{ msg: 'Category not found.' }] });
		}
		res.status(500).send('Server Error.');
	}
});

module.exports = router;
