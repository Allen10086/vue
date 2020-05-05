// 引入vue模块
import Vue from './vue.js'  

// 引入组件对象
import App from './App.js'

// 导入模块
import'./main.less'

new Vue({
	el:'#app',
	components:{
		App
	},
	template:`
		<App/>
	`,
});
