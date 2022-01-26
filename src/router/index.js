import Vue from 'vue'
import Router from 'vue-router'

const Login = r => require.ensure([], () => r(require('../views/Login.vue')));
const Home = r => require.ensure([], () => r(require('../views/Home.vue')));
const UpdateLog = r => require.ensure([], () => r(require('../views/UpdateLog.vue')));
const Message = r => require.ensure([], () => r(require('../views/Message.vue')));
const ArticleList = r => require.ensure([], () => r(require('../views/ArticleList.vue')));
const UserList = r => require.ensure([], () => r(require('../views/UserList.vue')));
const UpdateLogEdited = r => require.ensure([], () => r(require('../views/UpdateLogEdite.vue')));
const ArticleEdit = r => require.ensure([], () => r(require('../views/ArticleEdit.vue')));
const VNode = r => require.ensure([], () => r(require('../views/VNode.vue')));

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      // { path: '/', component: Login },
      { path: '/home', component: Home },
      { path: '/user_list/:page(\\d+)?', component: UserList },
      { path: '/article_list/:page(\\d+)?', component: ArticleList },
      { path: '/message/:page(\\d+)?', component: Message },
      { path: '/update_log/:page(\\d+)?', component: UpdateLog },
      { path: '/update_log_edit/:page(\\d+)?', component: UpdateLogEdited },
      { path: '/article_edit/:id?', component: ArticleEdit },
      { path: '/v_node', component: VNode },
      // { path: '/user/:id', component: UserView },
      { path: '/', redirect: '/home' }
    ]
  })
}
