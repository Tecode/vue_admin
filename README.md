## Vue+Vue-router+Vuex后台管理系统
- Github项目地址:[https://github.com/Tecode/vue-admin](https://github.com/Tecode/vue-admin)
- 网站地址: [https://soscoon.com/article/10170](https://soscoon.com/article/10170)
- 欢迎star

## 安装

``` bash
# 克隆项目

git clone https://github.com/Tecode/vue-admin.git

# install dependencies
npm install # or yarn

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```

## 说明

- 启动项目以后直接进入页面不需要登录,由于没有api无法登录
- 直接输入[http://localhost:8088/home](http://localhost:8088/home)访问首页

```bash
# 路由列表
      { path: '/', component: Login },
      { path: '/home', component: Home },
      { path: '/userlist/:page(\\d+)?', component: UserList },
      { path: '/articlelist/:page(\\d+)?', component: ArticleList },
      { path: '/message/:page(\\d+)?', component: Message },
      { path: '/updatelog/:page(\\d+)?', component: UpdateLog },
      { path: '/updatelogedite/:page(\\d+)?', component: UpdateLogEdite },
			{ path: '/articleedit/:id?', component: ArticleEdit },
      { path: '/home', component: Home },
      { path: '/userlist/:page(\\d+)?', component: UserList },
      { path: '/articlelist/:page(\\d+)?', component: ArticleList },
      { path: '/message/:page(\\d+)?', component: Message },
      { path: '/updatelog/:page(\\d+)?', component: UpdateLog },
      { path: '/updatelogedite/:page(\\d+)?', component: UpdateLogEdite },
			{ path: '/articleedit/:id?', component: ArticleEdit },

```

## 预览图

![image](http://admin.soscoon.com/uploadImages/bbe8ca9b80c2f8266736b95fe63e67d913bf7038.png)

![image](http://admin.soscoon.com/uploadImages/ff5583da5072c2fd2b45a78973d39d89c1b1d1a7.png)

![image](http://admin.soscoon.com/uploadImages/ca172f8a5a421895ce1f2bd5f0230c837c94529b.png)

![image](http://admin.soscoon.com/uploadImages/f68f95a87c8c5c4903e6715b8fe9c9c9f133cbe2.png)

![image](http://admin.soscoon.com/uploadImages/375fa2fddef7a250868b0a25c48b590bee83bf38.png)

![image](http://admin.soscoon.com/uploadImages/ad483ec4188d6b7165dccaf4043fc0a11b23e159.png)

![image](http://admin.soscoon.com/uploadImages/c3d3934c3d7f81eceb6e6b52ff63cf966eeeb2db.png)