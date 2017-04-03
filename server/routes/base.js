import path from 'path'
import controller from '../controllers/artists'

const artist = controller();

export default [
	{
		method: 'GET',
		path: '/',
		handler: (request, reply) => {
			reply.file('index.html');
		}
	},

	{
		method: 'GET',
		path: '/app/{file*}',
		handler: {
			directory: {
				path: '../app',
				index: true
			}
		}
	},

	{
		method: 'GET',
		path: '/dist/{file*}',
		handler: {
			directory: {
				path: '../dist',
				index: true
			}
		}
	},

	{
		method: 'GET',
		path: '/music/{file}',
		handler: {
			proxy: {
				uri: 'https://s3.us-east-2.amazonaws.com/noirdoor-test/{file}'
			}
		}
	},

	{
		method: 'GET',
		path: '/artist/{artistName}',
		config: artist.getOne
	}
];
