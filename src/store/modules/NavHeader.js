import { listenerRouting, SETUSERINFO, GETUSERINFO } from '../actionTypes';
import { getUserInfoApi } from '../../api';

const LoginRegistration = {
	state: {
		activeNav: '',
		userInfo: {},
	},
	mutations: {
		[listenerRouting](state, val) {
			state.activeNav = val;
		},
		[SETUSERINFO](state, data){
			state.userInfo = data;
		}
	},
	actions: {
		[GETUSERINFO]({state, commit, rootState}, value){
			getUserInfoApi()
			.then(((response) => {
				console.log(response.data);
				commit('SETUSERINFO', response.data);
			}))
			.catch((err) => {
				// commit('OPEN_DIALOG',{
				// 	title: '错误提示',
				// 	content: err.response.data.error,
				// 	button: true,
				// 	multiple: false,
				// 	timer: null,
				// 	callBack: () => { window.location.href = '/' }
				// });
			})
		}
	},
	getters: {
		// doneTodosCount () {
		// 	return 66666666666;
		// }
	}
};

export default LoginRegistration;