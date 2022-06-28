const path = require("path"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin(),
        new HtmlCriticalWebpackPlugin({
            base: path.resolve(__dirname, "dist"),
            src: "index.html",
            dest: "index.html",
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            penthouse: {
                blockJSRequests: false,
            },
        }),
    ],
};
