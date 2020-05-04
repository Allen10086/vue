// 引入vue模块
import Vue from './vue.js'  

// 引入组件对象
import App from './App.js'


import {num1,num2,add} from './App.js'


add(10,20);

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