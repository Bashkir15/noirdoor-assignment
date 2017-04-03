const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
	app: path.join(__dirname, 'app'),
	dist: path.join(__dirname, 'dist'),
	test: path.join(__dirname, 'test')
};

module.exports = {
	devtool: 'cheap-module-eval-source-map',

	entry: {
		app: PATHS.app
	},

	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		publicPath: '/',
		path: path.join(PATHS.dist)
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},

			{
				test: /\.jsx?$/,
				use: ['xo-loader'],
				enforce: 'pre',
				include: PATHS.app + '/**/*.+(jsx|js)'
			},

			{
				test: /\.js$/,
				use: 'babel-loader',
				include: path.join(__dirname, 'test'),
				exclude: /node_modules/
			},

			{
				test: /\.json$/,
				use: 'json-loader'
			},

			{
				test: /\.sass$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},

			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},

	resolve: {
		extensions: ['.js', '.jsx', '.json', '.sass', '.css'],
		alias: {
			'wavesurfer': path.resolve(__dirname, './node_modules/wavesurfer.js/dist/wavesurfer.js')
		}
	},

	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		stats: 'errors-only',
		host: 'localhost',
		port: 3000,
		proxy: {
			"*": "http://localhost:8000"
		}
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}),

		new webpack.HotModuleReplacementPlugin(),

		new webpack.LoaderOptionsPlugin({
			options: {
				xo: {
					emitError: true
				}
			}
		}),

		new ExtractTextPlugin('main.css')
	]
}