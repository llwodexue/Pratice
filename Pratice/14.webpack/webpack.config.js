let path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development", // 模式，默认两种 production development
    entry: "./src/index.js", // 入口
    output: {
        filename: "main.js", // 打包后的文件名
        path: path.resolve(__dirname, "dist"), // 路径必须是一个绝对路径
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            modules: true,
                        },
                    },
                    "css-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.css",
        }),
    ],
};
