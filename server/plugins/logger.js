import Good from 'good'
import Winston from 'winston'
import config from '../config/config'

const options = {
	ops: {
		interval: 1000
	},

	reporters: {
		reporters: [
			{
				module: 'good-squeeze',
				name: 'Squeeze',
				args: [{
					log: '*',
					response: '*'
				}],
			},

			{
				module: 'good-console'
			},

			'stdout'
		]
	}
};

module.exports = {
	plugin: {
		register: Good,
		name: 'good',
		options: options
	},

	callback: (server, error) => {
		if (error) {
			server.log(['error'], 'plugin good failed');
		}

		server.log(['info'], 'Good plugin working');
	}
}