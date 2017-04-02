import Winston from 'winston'
import GoodWinstonReporter from 'good-winston-reporter'

module.exports = {
	host: 'localhost',
	port: 8000,
	secret: 'adfagsfd892kjr asdfas asd',

	logger: {
		reporters: [{
			reporter: GoodWinstonReporter,
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