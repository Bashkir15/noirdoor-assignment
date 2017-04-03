import h2o2 from 'h2o2'

module.exports = {
	plugin: {
		name: 'proxy',
		register: h2o2,
		options: {}
	},

	callback: (server, error) => {
		if (error) {
			server.log(['error'], 'plugin proxy failed');
		}

		server.log(['info'], 'Proxy plugin working')
	}
};