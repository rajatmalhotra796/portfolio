const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // to clean the dist folder and much more...


// use to extract the compiled code from sass loader and place it in new bundle file for css called global.css
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 

const extractPlugin = new ExtractTextPlugin({
    filename: 'global.css'
});


module.exports = {
    entry: './src/app/app.js', // relative path seen from the webpack.config file.
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') // should be absolute path.
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        // new webpack.ProvidePlugin({ $: require.resolve('jquery') }), not working 
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Rajat Malhotra',
            myPageHeader: 'Hello Wrold',
            template: './src/index.html',
            filename: './index.html'
        }),
        extractPlugin,
    ],
    module: {
        rules: [
            // { // to load the css dynamically for a particular component.
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //     ],
            // },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|svg|gif|jpg|jpeg)$/,
                use: [ 
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    } 
                ]
            },
            { // for scss loader
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
        ],
    },
    // plugins: [
    //     // new webpack.optimize.UglifyJsPlugin({})
    //     extractPlugin
    // ]
};
