const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    environment: {
      arrowFunction: false, // 设置 webpack 打包时不使用剪头函数
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { // 配置 babel
            loader: 'babel-loader',
            options: {
              // 设置预定义的环境
              presets: [
                ['@babel/preset-env', {
                  // 要兼容的目标浏览器
                  targets: { 'chrome': '88' },
                  'corejs': '3', // 指定 corejs 的版本
                  'useBuiltIns': 'usage', // 按需加载
                }]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js'],
  }
};
