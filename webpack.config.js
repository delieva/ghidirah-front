const path = require("path");

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	output: {
		filename: "./main.js"
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
		watchContentBase: true,
		progress: true,
		open: true,
		hot: true,
		historyApiFallback: true,
		publicPath: '/',
	},
	
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: true
						}
					}
				]
			},
			{
				test: /\.scss$/,
				exclude: /\.module.(scss)$/,
				loader: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.module\.scss$/,
				loader: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[name]__[local]___[hash:base64:5]',
							},
							sourceMap: true,
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"]
			}
		]
	}
};
