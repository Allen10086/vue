// 引入vue模块
import Vue from './vue.js'  

// 引入组件对象
import App from './App.js'


import {num1,num2,add} from './App.js'


add(10,5);

console.log(num1);
console.log(num2);

new Vue({
	el:'#app',
	components:{
		App
	},
	template:`
		<App/>
	`,
});

// 打包js webapck4.0以下版本: webpack main.js build.js
// 打包js webapck4.0以上版本: webpack ./main.js -o build.js
// webpack打包 报错：https://blog.csdn.net/weixin_39090097/article/details/81234618


// 在packge.json中配置scripts参数   json文件中不能有任何注释否则报错
// "build":"webpack ./main.js ./build.js"
// "dev":"webpack --config ./webpack.dev.config.js",   npm run dev   开发模式 编译产出
// "prod":"webpack --config ./webpack.prod.config.js"  npm run prod  生产模式 编译产出