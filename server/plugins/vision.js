import Vision from 'vision'

module.exports = {
	plugin: {
		name: 'vision',
		register: Vision,
		options: {}
	},

	callback: (server, error) => {
		if (error) {
			server.log(['error'], 'plugin vision failed');
		}

		server.log(['info'], 'Vision plugin working');
	}
}