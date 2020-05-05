var app={
	template:`
		<div>我是APP组件</div>
	`
};

// 抛出组件对象
export default app;

// 作为一整对对象导出
export var num1 = 2;

// 声明在导出
var num2 = 3;
export {num2};

// 抛出函数
export function add(x,y){
	return console.log(x+y);
}