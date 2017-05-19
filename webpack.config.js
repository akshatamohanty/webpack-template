const webpack = require('webpack');
const path = require('path');  // needed for path.join

var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(__dirname)

module.exports = {
    entry: {
       	app: './src/js/app.js', 
       	vendor: './src/js/vendor.js'
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].js',
        chunkFilename: '[id].js'
    },
    module: {
        rules: [
          	{
	            test: /\.css$/,
	            use: ExtractTextPlugin.extract({
	              fallback: 'style-loader',
	              use: 'css-loader'
	            })
          	},
          	{
	            test: /\.scss$/,
	            use: [{
	                loader: "style-loader" // creates style nodes from JS strings
	            }, {
	                loader: "css-loader" // translates CSS into CommonJS
	            }, {
	                loader: "sass-loader" // compiles Sass to CSS
	            }]
        	}
        ],
        loaders: [
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.sass/, use: ['style-loader', 'css-loader!sass-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Template',
            minify: {
                collapseWhitespace: false
            },  
            template: './src/index.html'
        }),
        new ExtractTextPlugin('[name].css')
    ]
};

// when you change something here - restart server