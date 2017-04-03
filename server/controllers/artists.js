import model from '../models/monartists'

const Artist = model.Artist;

module.exports = () => {
	const obj = {};

	obj.getOne = {
		handler: (request, reply) => {
			Artist.findOne({name: request.params.artistName})
			.exec((err, artist) => {
				if (err) {
					reply.sendStatus(500);
				} else {
					reply(artist);
				}
			})
		}
	};

	return obj;
};