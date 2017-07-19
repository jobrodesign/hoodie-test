module.exports = {
	entry: './src/js/app.js',
	output: {
		filename: './public/js/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.tag$/,
				exclude: '/node_modules/',
				loader: 'riot-tag-loader',
				query: {
					hot: false
				}
			}
		]
	}
};