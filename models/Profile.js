const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user'
		},
		status: {
			type: String
		},
		location: {
			type: String
		},
		bio: {
			type: String
		},
		notes: [
			{
				text: {
          type: String,
          required: true
				},
				date: {
					type: Date,
          default: Date.now
				},
			},
		],
	},
	{
		timestamps: true
	}
);

module.exports = Profile = mongoose.model('profile', ProfileSchema);
