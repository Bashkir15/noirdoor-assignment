import Winston from 'winston'

module.exports = {
	host: 'localhost',
	port: 8000,
	secret: 'adfagsfd892kjr asdfas asd',

	logger: {
		reporters: [{
			reporter: require('good-winston-reporter'),
			events: {
				log: '*',
				request: '*',
				response: '*',
				error: '*'
			},

			config: {
				logger: Winston
			}
		}]
	},

	database: {
		host: 'localhost',
		port: 28015,
		authKey: '',
		db: "noirdoor_project",
		silent: true
	}
};