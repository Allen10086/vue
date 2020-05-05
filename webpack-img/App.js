import imgSrc from './meizi.jpg'  // 导入图片


var app={
	data(){
		return {
			imgSrc:imgSrc
		}
	},
	template:`
		<div>
			<img :src='imgSrc' alt='妹子'/> 
		</div>
	`
};

// 抛出组件对象
export default app;
