const webpack = require('webpack');
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const {PORT_CLIENT=8080, PORT_API_SERVER=8081} = process.env;

const config = {
    entry: [
        'react-hot-loader/patch',
        './src/index.tsx'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            },
            {
                test: /([\\/])styles\.(s)?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]___[hash:base64:5]'
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
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx'
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            'components': path.resolve(__dirname, 'src/components'),
            'utils': path.resolve(__dirname, 'src/utils'),
            'configs': path.resolve(__dirname, 'src/configs'),
            'constants': path.resolve(__dirname, 'src/constants'),
            'types': path.resolve(__dirname, 'src/types'),
            'state': path.resolve(__dirname, 'src/state'),
            'images': path.resolve(__dirname, 'src/images')
        }
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        host: '0.0.0.0',
        port: PORT_CLIENT,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new LodashModuleReplacementPlugin,
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
        new webpack.DefinePlugin({
            PORT_API_SERVER
        })
    ]
};

module.exports = config;
