const webpack = require('webpack');
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const config = {
    entry: [
        'react-hot-loader/patch',
        './src/index.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /([\\/])styles\.(s)?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            },
                            sourceMap: true
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: {include: /\.css$/, exclude: /([\\/])styles\.css$/},
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: {include: /\.scss$/, exclude: /([\\/])styles\.scss$/},
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: 'file-loader'
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            'components': path.resolve(__dirname, 'src/components'),
            'configs': path.resolve(__dirname, '../configs')
        }
    },
    devServer: {
        contentBase: './dist',
        host: '0.0.0.0',
        port: 8080
    },
    plugins: [
        new LodashModuleReplacementPlugin,
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/)
    ]
};

module.exports = config;