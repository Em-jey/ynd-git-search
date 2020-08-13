const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
	entry: [
    	'react-hot-loader/patch',
  	],
	mode: 'development',
  	devtool: "eval-source-map",
	devServer: {
		hot: true,
		hotOnly: true,
		inline: true,
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development'),
			}
		})
	],
});
