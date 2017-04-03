import thinky from './db'

const r = thinky.r;
const type = thinky.type;

const Artist = thinky.createModel('Artist', {
	id: type.string(),
	name: type.string(),
	genres: type.array(),
	bio: type.string(),
	createdAt: type.date().default(r.now())
});

const Songs = thinky.createModel('Songs', {
	id: type.string(),
	name: type.string(),
	album: type.string(),
	location: type.string(),
	createdAt: type.date().default(r.now()),
	listens: type.number()
});

Artist.hasMany(Songs, "songs", "creatorId", "id");
Songs.belongsTo(Artist, "artist", "creatorId");

Artist.defineStatic('findByName', (name) => {
	return this.get(name).getJoin({songs: true})
	.run().then((artist) => {
		if (artist) {
			return artist;
		}
	})
});

module.exports = {
	Artist: Artist:,
	Songs: Songs
};