import Hapi from 'hapi'
import config from './config'

// if new plugins are made, create an index like
// in config
import logger from './plugins/logger'

const server = new Hapi.Server();

server.connection({
	host: config.host,
	port: config.port
});

server.register(logger, (error) => {
	if (error) {
		callback(error);
	}
});

server.start(() => {
	server.lost(['info'], `Server running at ${server.info.uri}`);
});

export default server;