// 生产环境
// webpack.config.js   文件命名不可变
module.exports={
	// 入口
	entry:{
		// 可以有多个入口 也可以有一个 ，如果有一个就默认从这一个入口开始解析
		"main":"./main.js"
	},
	output:{
		filename:"./build.js"
	},
	// watch:true, // 文件监视改动  自动产出build.js  (组件里面的任何一个参数改动都会重新编译并产出build.js)
	// 生产环境不需要监视改动
}

// 直接在命令行执行webpack命令 会在当前目录下生成一个dist文件夹 该文件目录下即是编译产出后的build.js文件
