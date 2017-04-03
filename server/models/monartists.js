import mongoose from 'mongoose'

const artistSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},

	genres: {
		type: Array
	},

	bio: {
		type: String,
		required: true
	},

	songs: [{
		name: {
			type: String,
			requried: true
		},

		album: {
			type: String,
			requried: true
		},

		location: {
			type: String,
			required: true
		},

		listens: {
			type: Number,
			default: 0
		}
	}],

	createdAt: {
		type: Date,
		default: Date.now
	}
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = {
	Artist: Artist
};