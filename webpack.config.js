var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            use: [{
                loader: "babel-loader"
            }]
        }, {
            test: /\.less$/,
            use: [
                "style-loader", "css-loader", "less-loader"
            ]
        }]
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        open: true,
        port: 9900,
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true
        }
    }
}