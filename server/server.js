import Hapi from 'hapi'
import Path from 'path'
import config from './config/config'
import plugins from './plugins/plugins'
import routes from './routes/index'
import Db from './models/mon'

const server = new Hapi.Server({
	connections: {
		routes: {
			files: {
				relativeTo: Path.join(__dirname, '../app')
			}
		},
	}
});

server.connection({
	host: config.host,
	port: config.port
});

function registerRoutes() {
	server.route(routes);
}

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



function start() {
	return Promise.all([
		registerPlugins(() => {}),
		registerRoutes(() => {})
	]).then(() => {
		server.start(() => {
			server.log(['info'], `The application is up and running at ${server.info.uri}`);
		});
	});
}

start();



export default server;