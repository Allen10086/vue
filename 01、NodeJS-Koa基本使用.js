    // 1、安装koa       npm i koa -S
	// 2、导入koa模块
    const Koa = require('koa');
    // 创建koa的实例app
    const app = new Koa();

    app.use(async ctx => {
        ctx.body = "Hello World"  // 返回页面文本信息
    })
    // 监听端口
    app.listen(3000, () => {
        console.log("服务器已启动，http://localhost:3000");
    })