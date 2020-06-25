const express = require('express');
const router = express.Router();

// auth
const auth = require('../../middleware/auth');

// models
const Profile = require('../../models/Profile');

// validation
const { check, validationResult } = require('express-validator');

// @route     GET api/profile/me
// @desc      Get current user's profile
// @access    Private
router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);

		if (!profile) {
			return res.status(400).json({ msg: 'There is no profile for this user.' });
		}

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error.');
	}
});

// @route     POST api/profile/
// @desc      Create or update user profile
// @access    Private
router.post('/', auth, async (req, res) => {
	const { status, location, bio } = req.body;

	// build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (location) profileFields.location = location;
  if (status) profileFields.status = status;
  if (bio) profileFields.bio = bio;

	try {
		let profile = await Profile.findOne({ user: req.user.id });

		if (profile) {
			// Update the profile
			profile = await Profile.findOneAndUpdate(
        { user: req.user.id }, 
        { $set: profileFields }, 
        { new: true }
      );
      return res.json(profile);
    }
    
    // Create a profile
    profile = await new Profile(profileFields);

    await profile.save();
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error.');
	}
});

// @route     GET api/profile/
// @desc      Get all profiles
// @access    Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);

    res.json(profiles);
  } catch (err) {
    console.error(err.message);
		res.status(500).send('Server Error.');
  }
});

// @route     GET api/profile/user/:user_id
// @desc      Get profile by user ID
// @access    Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']);

    if(!profile) {
      return res.status(400).json({ msg: 'Profile not found.' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if(err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found.' });
    }
		res.status(500).send('Server Error.');
  }
});

// @route     GET api/profile/
// @desc      Delete profile, user & posts
// @access    Private
router.delete('/', auth, async (req, res) => {
  try {

    // remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    
    // remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User removed.'});
  } catch (err) {
    console.error(err.message);
		res.status(500).send('Server Error.');
  }
});

// @route     PUT api/profile/notes
// @desc      Add notes
// @access    Private
router.put('/notes', 
[
  auth,
  check('text', 'Notes is required').not().isEmpty()
]
, async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    text,
    date
  } = req.body;

  const newNote = {
    text,
    date
  }

  try {
    const profile = await Profile.findOne({ user: req.user.id });

    profile.notes.unshift(newNote);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
		res.status(500).send('Server Error.');
  }
});

module.exports = router;
