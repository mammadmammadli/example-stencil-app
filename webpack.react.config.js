const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "production",
    entry: {
        "index": path.resolve(__dirname, 'react/src/index'),
    },
    output: {
        path: path.resolve(__dirname, "react/dist"),
        filename: "[name].js",
        libraryTarget: 'commonjs2',
        library: "mylovely-library-react"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: ['ts-loader'],
                include: path.resolve(__dirname, 'react/src'),
            }
        ]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ]
};