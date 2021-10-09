## Vue+Vue-router+Vuex后台管理系统
- Github项目地址:[https://github.com/Tecode/vue-admin](https://github.com/Tecode/vue-admin)
- 网站地址: [http://vue.soscoon.com/home](http://vue.soscoon.com/home)
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
- 直接输入[http://localhost:8088/](http://localhost:8088/)访问首页

```bash
# 路由列表
      { path: '/home', component: Home },
      { path: '/user_list/:page(\\d+)?', component: UserList },
      { path: '/article_list/:page(\\d+)?', component: ArticleList },
      { path: '/message/:page(\\d+)?', component: Message },
      { path: '/update_log/:page(\\d+)?', component: UpdateLog },
      { path: '/update_log_edit/:page(\\d+)?', component: UpdateLogEdited },
      { path: '/article_edit/:id?', component: ArticleEdit },
      // { path: '/user/:id', component: UserView },
      { path: '/', redirect: '/home' }

```

## 预览图

### 首頁

<div align="center">
<img src="./public/image/home.jpg" width=900>
</div>

### 用戶列表

<div align="center">
<img src="./public/image/user_list.jpg" width=900>
</div>

### 留言

<div align="center">
<img src="./public/image/message.jpg" width=900>
</div>

### 更新日志

<div align="center">
<img src="./public/image/log.jpg" width=900>
</div>


## Run Time (Build & Dev)

```
DONE  Compiled successfully in 2813ms                                                                         下午5:54:12
webpack built 1661958444fd664290ca in 2813ms
```

```bash
haoxuan@haoxuandeMacBook-Pro vue-admin % npm run build

> aming-project@ build /Users/haoxuan/Work/vue-admin
> rimraf dist && npm run build:client && npm run build:server


> aming-project@ build:client /Users/haoxuan/Work/vue-admin
> cross-env NODE_ENV=production webpack --config build/webpack.client.config.js --progress --hide-modules

 95% emittingTotal precache size is about 2.19 MB for 14 resources.                      
Hash: 5769023a41b07fe5b986
Version: webpack 2.6.1
Time: 7169ms
                                              Asset     Size  Chunks                    Chunk Names
               b02bdc1b846fd65473922f5f62832108.ttf  13.2 kB          [emitted]         
              d2f69a92faa6fe990d2e613c358be705.woff     8 kB          [emitted]         
  logo_manager.png?978dd115b2701358931ca7273d58455c  14.4 kB          [emitted]         
gitlab-project.jpg?6c2712cbc1afd67bd9a47de9c6549632  86.8 kB          [emitted]         
      no_image.jpg?9a0a666af20238d44ed8de2daddbab28  12.4 kB          [emitted]         
     qq_QRcode.jpg?27c8f93ed65d0b05699e9ebfc1361ef9  37.6 kB          [emitted]         
 wechat_QRcode.jpg?c7e0bed3fb10a518f7a16f3ea26521bf  68.3 kB          [emitted]         
    demo_image.jpg?a24057a31fd41d5d3dd8012aa1ba0578  10.5 kB          [emitted]         
   Demo_moudle.jpg?7e69bfe64a3538c412759dcd4a8c1508    15 kB          [emitted]         
                          0.09f739f8ff7a980322d0.js   727 kB       0  [emitted]  [big]  
                          1.0013c87316e73a3e9eb6.js  16.5 kB       1  [emitted]         
                          2.783661d35beabb863765.js  20.2 kB       2  [emitted]         
                          3.8efdc457b6d2e620db41.js  15.8 kB       3  [emitted]         
                          4.183c3b16688eabd43f9d.js    11 kB       4  [emitted]         
                          5.0c2c3b7bca6c560a7604.js  6.05 kB       5  [emitted]         
                          6.3ac3c9686fb0897d1f16.js  15.7 kB       6  [emitted]         
                          7.b8a70c81cf120b661c15.js  8.16 kB       7  [emitted]         
                     vendor.3b42ae31cfd1630da70f.js   1.1 MB       8  [emitted]  [big]  vendor
                        app.149070914d951d22ef7a.js  34.1 kB       9  [emitted]         app
                   manifest.89ace7fb6beab705465a.js  1.65 kB      10  [emitted]         manifest
                    common.149070914d951d22ef7a.css   181 kB       9  [emitted]         app
                       vue-ssr-client-manifest.json  45.4 kB          [emitted]         

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (250 kB).
This can impact web performance.
Assets: 
  0.09f739f8ff7a980322d0.js (727 kB)
  vendor.3b42ae31cfd1630da70f.js (1.1 MB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (300 kB). This can impact web performance.
Entrypoints:
  app (1.32 MB)
      manifest.89ace7fb6beab705465a.js
      vendor.3b42ae31cfd1630da70f.js
      app.149070914d951d22ef7a.js
      common.149070914d951d22ef7a.css


> aming-project@ build:server /Users/haoxuan/Work/vue-admin
> cross-env NODE_ENV=production webpack --config build/webpack.server.config.js --progress --hide-modules

Hash: 5f2811b91149e50fe9bc                                                              
Version: webpack 2.6.1
Time: 2186ms
                     Asset    Size  Chunks             Chunk Names
vue-ssr-server-bundle.json  167 kB          [emitted] 
```