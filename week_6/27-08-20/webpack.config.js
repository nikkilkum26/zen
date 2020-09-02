const path = require('path');
module.exports = {
	entry: path.join(__dirname, '/script.ts'),
	output: {
		filename: 'script.js',
		path: path.resolve(__dirname,'C:/Users/nikki/Documents/27-08-20/')
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	}
}