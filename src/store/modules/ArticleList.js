import {
	GETARTICLELIST,
	SETLIST_ARTICLE_DATA
} from '../actionTypes'
import { getArticelListApi } from '../../api';
import moment from 'moment';

const ArticleList = {
	state: {
		articleData: [],
		total: 1
	},
	mutations: {
		[SETLIST_ARTICLE_DATA](state, {data, total}){
			state.articleData = data;
			state.total = total;
		}
	},
	actions: {
		[GETARTICLELIST]({state, commit, rootState},{index, size}){
			getArticelListApi({index, size})
			.then((response) => {
				let newArr = [];
				response.data.data.forEach((item) => {
					item['month'] = moment.unix(item.time).format('MMM');
					item['day'] = moment.unix(item.time).format('DD');
					item['type'] = item['type'].split('，');
					newArr = [...newArr,item]
				});
				commit('SETLIST_ARTICLE_DATA', {data:newArr, total:response.data.total});
			})
			.catch((err) => {
				commit('OPEN_DIALOG',{
					title: '错误提示',
					content: err.response.data.msg,
					button: false,
					multiple: false,
					timer: 3000
				})
			})
		}
	}
};

export default ArticleList;