const path = require('path');

// 开发环境
// webpack.config.js   文件命名不可变
module.exports = {
	// 入口
	entry: {
		// 可以有多个入口 也可以有一个 ，如果有一个就默认从这一个入口开始解析
		"main": "./main.js"                      // JavaScript 执行入口文件
	},
	output: {
		filename: "./build.js",                  // 把所有依赖的模块合并输出到一个 build.js 文件
		path: path.resolve(__dirname, './dist'), // 输出文件都放到 dist 目录下
	},

	// 声明模块  解析css文件
	module: {
		rules: [{
			// 1、遇到后缀为.css的文件 webpack先用css-loader加载器去解析这个文件
			// 2、最后计算完的css，将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里
			// webpack在打包的过程中 遇到后缀为.css文件 就会使用style-loader  css-loader去加载这个文件
			test: /\.css$/, // 用正则去匹配要用该 loader 转换的 CSS 文件
			use: ['style-loader', 'css-loader'],
		}],
		// 更多打包css方法：https://www.jianshu.com/p/b230a69be59b
	},
	
	
	watch: true, // 文件监视改动  自动产出build.js  (组件里面的任何一个参数改动都会重新编译并产出build.js)


}

// 它的工作原理大概是把 CSS 内容用 JavaScript 里的字符串存储起来， 在网页执行 JavaScript 时通过 DOM 操作动态地往 HTML head 标签里插入 HTML style 标签。


/*
css-loader: 加载.css文件
style-loader: 在打包生成的js文件中，动态创建<style>将css-loader内部样式注入head标签
所以在单独打包css的时候就要把rules里的style-loader去掉，否则会报错
*/