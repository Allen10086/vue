const path = require('path');
// 声明html-webpack-plugin对象
const HtmlWebpackPlugin = require('html-webpack-plugin')  

// 开发环境
// webpack.config.js   文件命名不可变
module.exports = {
	// 入口
	entry: {
		// 可以有多个入口 也可以有一个 ，如果有一个就默认从这一个入口开始解析
		"main": "./main.js" // JavaScript 执行入口文件
	},
	output: {
		filename: "./build.js", // 把所有依赖的模块合并输出到一个 build.js 文件
		path: path.resolve(__dirname, './dist'), // 输出文件都放到 dist 目录下
	},

	// 对文件的处理 webpack需要用url-loader和file-loader  安装模块：npm i url-loader file-loader -D
	module: {
		rules: [{
				test: /\.(jpg|png|jpeg|gif|svg)$/, // 匹配图片格式
				use: [{
					loader: "url-loader", // 解析器
					options: {
						limit: 80000,
						// 图片大小低于指定的限制时 使用base64编码可以减少一次图片的网络请求
						// 图片大小高于指定的限制时 编译后会在dist文件内产出一个类似于3dc1f9a7ece779a98d4fed5d9d7eb790.jpg图片
					}
				}]
			},
			// less模块安装    npm install less-loader -D
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "less-loader" // compiles Less to CSS
				}]
			}
		],

	},

	// 安装plugin模块:npm i html-webpack-plugin -D     用于打包输出html
	plugins: [
		new HtmlWebpackPlugin({ // 打包输出HTML
			title: 'Hello World app', // 生成html文件的标题
			minify: { // 压缩HTML文件
				removeComments: true, // 移除HTML中的注释
				collapseWhitespace: true, // 删除空白符与换行符
				minifyCSS: true // 压缩内联css
			},
			filename: 'index.html',
			template: 'index.html'
		}),

		/*
		webpack打包时错误Cannot find module 'webpack/lib/node/NodeTemplatePlugin'
		解决办法:
		执行命令:npm link webpack --save-dev
		*/
	],


	watch: true, // 文件监视改动  自动产出build.js  (组件里面的任何一个参数改动都会重新编译并产出build.js)


}
