import Good from 'good'
import config from '../config'

export default {
	plugin: {
		register: Good,
		options: config.logger
	},

	callback: (server, error) => {
		if (error) {
			server.log(['error'], 'plugin good failed');
		}

		server.log(['info'], 'Good plugin working');
	}
}