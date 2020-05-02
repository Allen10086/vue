// 导入koa模块
const Koa = require('koa');
// 创建koa的实例app
const app = new Koa();

// 1、安装koa-router            npm i koa-router -D
// 2、导入koa-router模块并实例化
const Router = require('koa-router');
// 创建koa-router的实例router
const router = new Router();


// get请求
router.get('/', async ctx => {
	ctx.body = {
		token: 'abc',
		status: 'ok'
	};
});

// post请求	
router.post('/add', async ctx => {
	ctx.req.on('data', data => {
		console.log(data);
		console.log(data.toString());
	});
	ctx.body = 'post ok';  // 响应数据
});

app.use(router.routes());
app.use(router.allowedMethods()); // 错误请求

// 3、配置，并访问本地地址端口3000
app.listen(8888, () => {
	console.log('服务器启动在8888端口');
});

// 使用教程:https://www.jianshu.com/p/285b37fdf5fc
// 官网:https://koa.bootcss.com/