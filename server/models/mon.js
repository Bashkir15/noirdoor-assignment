import Mongoose from 'mongoose'
import config from '../config/config'

Mongoose.connect(`mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.db}`);

const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
	console.log(`connected to the ${config.mongo.db} database`);
});

exports.Mongoose = Mongoose;
exports.db = db