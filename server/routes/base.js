import path from 'path'

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
				path: '/',
				index: true
			}
		}
	}
];