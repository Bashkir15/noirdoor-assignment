import Inert from 'inert'

module.exports = {
	plugin: {
		name: 'inert',
		register: Inert,
		options: {}
	},

	callback: (server, error) => {
		if (error) {
			server.log(['error'], 'plugin inert failed');
		}

		server.log(['info'], 'Inert plugin working');
	}
}