const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const title = require('./package').title;

module.exports = {
	entry: ["./src/index.tsx"],
	output: {
		path: path.resolve(__dirname, 'public/'),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
			navigation: path.resolve(__dirname, 'src/navigation/'),
			pages: path.resolve(__dirname, 'src/pages/'),
			store: path.resolve(__dirname, 'src/store/'),
			styles: path.resolve(__dirname, 'src/styles/'),
			types: path.resolve(__dirname, 'src/types/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				loader: "babel-loader",
				exclude: /node_modules/

			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true
						}
					}
				],
				exclude: /node_modules/
			},
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public/'),
		historyApiFallback: true,
		host: '0.0.0.0',
		port: 8080,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.ejs'),
			templateParameters: (compilation, assets, assetTags, options) => {
				return {
					compilation,
					webpackConfig: compilation.options,
					htmlWebpackPlugin: {
						tags: assetTags,
						files: assets,
						options
					},
					'title': title || null
				};
			},
		}),
		new Dotenv(),
	],
};
