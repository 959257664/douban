#### <center>仿豆瓣APP</center>
>A Vue.js project
<br>

第一次接触vue全家桶系列，使用豆瓣API来当作我的第一个vue单页项目应用。

>跨域代理

因为自己还没有购买服务器，所以先使用了webpack提供的代理在本地进行跨域请求，完成跨域请求，完成跨域请求只需要在config/index.js中进行如下设置
```js
    proxyTable: {
      '/api': {
        target: 'https://api.douban.com/v2/',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
      }
    },
```

>技术栈
- 项目ui框架使用mint-ui
- 使用vue-cli+webpack构建项目和打包
- 使用vue-router、vueX进行路由分发和状态管理
- 使用Axios+mock.js完成ajax请求和拦截，完成数据交互
>如何运行
```js
cd douban
npm install //安装依赖
npm run dev //进入开发模式
```
接下来打算利用知乎api和vue完成知乎日报web版本作为进阶项目提升，欢迎小伙伴fork&star