module.exports = {
	env: {
		node: true,
		browser: false,
		commonjs: true,
		es2021: true,
	},
	extends: [
		'xo',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'linebreak-style': 0,
		'no-underscore-dangle': 'off',
		'max-len': [
			'error',
			125,
		],
		'no-param-reassign': [
			'error',
			{
				props: false,
			},
		],
		'no-useless-escape': 'off',
	},
};
