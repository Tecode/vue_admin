import Vue from 'vue'
import Router from 'vue-router'

const Login = r => require.ensure([], () => r(require('../views/Login.vue')));
const Home = r => require.ensure([], () => r(require('../views/Home.vue')));
const UpdateLog = r => require.ensure([], () => r(require('../views/UpdateLog.vue')));
const Message = r => require.ensure([], () => r(require('../views/Message.vue')));
const ArticleList = r => require.ensure([], () => r(require('../views/ArticleList.vue')));
const UserList = r => require.ensure([], () => r(require('../views/UserList.vue')));
const UpdateLogEdite = r => require.ensure([], () => r(require('../views/UpdateLogEdite.vue')));
const ArticleEdit = r => require.ensure([], () => r(require('../views/ArticleEdit.vue')));

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
			{ path: '/', component: Login },
      { path: '/home', component: Home },
      { path: '/userlist/:page(\\d+)?', component: UserList },
      { path: '/articlelist/:page(\\d+)?', component: ArticleList },
      { path: '/message/:page(\\d+)?', component: Message },
      { path: '/updatelog/:page(\\d+)?', component: UpdateLog },
      { path: '/updatelogedite/:page(\\d+)?', component: UpdateLogEdite },
			{ path: '/articleedit/:id?', component: ArticleEdit },
      // { path: '/user/:id', component: UserView },
      // { path: '/', redirect: '/top' }
    ]
  })
}
