var webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  {app: ['babel-polyfill','./resources/js/index.js'],
            movie: ['babel-polyfill','./resources/js/index2.js'],
            search: ['babel-polyfill','./resources/js/indexSearch.js']
},

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery:'jquery'
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './resources/index.html',
            excludeChunks: ['movie'],
            
        }),
        new HtmlWebpackPlugin({
            filename: 'movie',
            template: './resources/movie.html',
            excludeChunks: ['app'],
           
            
        }),

        new HtmlWebpackPlugin({
            filename: 'search',
            template: './resources/search.html',
            excludeChunks: ['app','movie'],
           
            
        }),


    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
} 