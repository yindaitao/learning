//输出目录路径
const path = require("path");
// console.log(path.resolve(__dirname, "dist"));

// //压缩插件
// const babiliPlugin = require("babili-webpack-plugin");

module.exports = {
    entry: {
        bundle: "./main.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map",
    devServer: {
        // contentBase: "./dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },
    // plugins: [
    //     new babiliPlugin()
    // ]
}