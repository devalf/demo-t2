const webpack = require('webpack');
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const config = ({PORT_CLIENT=8080, PORT_API_SERVER=8081}) => {
    return {
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
                    loader: 'ts-loader'
                },
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader'
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
                'state': path.resolve(__dirname, 'src/state')
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
};

module.exports = config;
