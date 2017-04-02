import development from 'development'
import production from 'production'

const config = {};

switch (process.env.NODE_ENV) {
	case 'production'
	case 'prod':
		config = Object.assign({}, production);
		break;

	default:
		config = Object.assign({}, development);
		break;
}

export default config