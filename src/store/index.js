import Vue from 'vue';
import Vuex from 'vuex';
// 单个模块
import LoginRegistration from './modules/LoginRegistration';
import NavHeader from './modules/NavHeader';
import Message from './modules/Message';
import ArticleEdit from './modules/ArticleEdit';
import Ui from './modules/Ui';
import ArticleList from './modules/ArticleList';

Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store({
		modules: {
			LoginRegistration: LoginRegistration,
			NavHeader: NavHeader,
			Message: Message,
			ArticleEdit: ArticleEdit,
			Ui: Ui,
			ArticleList: ArticleList,
		}
  })
}
