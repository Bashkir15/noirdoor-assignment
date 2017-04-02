function preCheck(obj) {
	return typeof obj === 'object' && typeof obj.default !== 'undefined' ? obj.default : obj;
}

export default function importDir() {
	let index = 1;
	let key;
	let options = {};
	let len = arguments.length;
	let args = Array(len);

	for (key = 0; key < len; key++) {
		args[key] = arguments[key];
	}

	if (args.length === 3) {
		index = 2;
		options = args[index];
	} else if (args.length === 2) {
		options = args[1];
	}

	args.length = args.length < 2 ? 2 : args.length;
	args[index] = options;

	const check = options.check;

	options.check = (obj) => {
		const result = preCheck(obj);

		return typeof check === 'function' ? check(result) : result;
	};


	return require('require-directory').apply(null, args);
}