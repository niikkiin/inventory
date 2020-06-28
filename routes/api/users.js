const express = require('express');
const router = express.Router();

// config
const config = require('config');

// validation
const { check, validationResult } = require('express-validator');

// image
const gravatar = require('gravatar');

// encrypt password
const bcrypt = require('bcryptjs');

// token for users
const jwt = require('jsonwebtoken');

// models
const User = require('../../models/User');

// @route     GET api/users
// @desc      Register user
// @access    Public
router.post(
	'/',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('email', 'Please include a valid email').not().isEmpty(),
		check('password', 'Please enter a password with 6 or more characters.').isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;

		try {
			// See if user exists
			let user = await User.findOne({ email });

			if (user) {
				return res.status(400).json({ errors: [{ msg: 'User already exist.' }] });
			}

			// get users avatar
			const avatar = gravatar.url(email, {
				s: '200',
				r: 'pg',
				d: 'mm',
			});

			user = new User({
				name,
				email,
				avatar,
				password,
			});

			// encrypt password
			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			// save user
      await user.save();
      
			// return jsonwebtoken
			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
				if (err) throw err;
				res.json({ token });
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
