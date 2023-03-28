const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const {PORT_CLIENT = 8082, PORT_API_SERVER = 8081} = process.env;

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';

    return ({
        mode: isDevelopment ? 'development' : 'production',
        entry: [
            './src/index.tsx'
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
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
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ],
                    exclude: /\.module\.css$/
                },
                {
                    test: /\.ts(x)?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true
                            }
                        }
                    ],
                    include: /\.module\.css$/
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
        devServer: {
            static: {
                directory: path.resolve(__dirname, './dist')
            },
            host: '0.0.0.0',
            port: PORT_CLIENT,
            historyApiFallback: true,
            allowedHosts: 'all'
        },
        plugins: [
            // new CopyPlugin({
            //     patterns: [{from: 'index.html'}]
            // }),
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new LodashModuleReplacementPlugin,
            new MiniCssExtractPlugin(),
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false
            }),
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
                process: {
                    env: {
                        MODE: JSON.stringify(argv.mode)
                    }
                }
            })
        ],
        resolve: {
            extensions: [
                '.tsx',
                '.ts',
                '.js'
            ]
        },
        ...(isDevelopment && {devtool: 'eval-source-map'}),
        ...(!isDevelopment && {
            performance: {
                hints: false,
                maxEntrypointSize: 512000,
                maxAssetSize: 512000
            }
        })
    });
};
