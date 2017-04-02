import Hapi from 'hapi'
import Inert from 'inert'
import config from './config/config'
import plugins from './plugins/plugins'

// if new plugins are made, create an index like
// in config
import logger from './plugins/logger'

const server = new Hapi.Server();

server.connection({
	host: config.host,
	port: config.port
});



function registerPlugins(callback) {
	for (let i in plugins) {
		let plugin = plugins[i];

		if (plugin) {
			server.register(plugin.plugin, (error) => {
				if (error) {
					callback(error);
				} else {
					typeof plugin.callback === 'function' && plugin.callback(server);
				}
			});
		} else {
			callback();
		}
	}

	callback();
}

registerPlugins(() => {
	server.start(() => {
		server.log(['info', `Server started at ${server.info.uri}`]);
	});

});


export default server;