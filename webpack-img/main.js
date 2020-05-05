// 引入vue模块
import Vue from './vue.js'  

// 引入组件对象
import App from './App.js'



new Vue({
	el:'#app',
	components:{
		App
	},
	template:`
		<App/>
	`,
});
