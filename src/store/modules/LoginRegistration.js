import {loginRequestApi, registerRequestApi} from '../../api';
import CryptoJS from 'crypto-js';
import {
	loginRegistration,
	closePopup,
	request,
	inputContent,
	loginRequest,
	registerRequest,
	INPUTEMAIL,
} from '../actionTypes'

const LoginRegistration = {
	state: {
		boxStatus: 'hidden',
		boxType: 'login',
		loading: false,
		isError: false,
		data: '',

		user_email: '',
		password: '',
		user_name: '',
		confirm_password: '',

		loginError: false,

		registerError: false,
		registerLoading: true,

		user_emailError: false,
		passwordError: false,
		user_nameError: false,
		confirm_passwordError: false,
	},
	mutations: {
		[loginRegistration](state, value) {
			state.boxStatus = 'visible';
			state.boxType = value;
			document.body.style.overflow = 'hidden';
		},
		[closePopup](state) {
			state.boxStatus = 'hidden';
			state.user_email = '';
			state.password = '';
			state.user_name = '';
			state.confirm_password = '';
			state.isError = false;
			state.data = '';
			document.body.style.overflow = null;
		},
		[request](state, {loading, isError, data}) {
			state.loading = loading;
			state.isError = isError;
			state.data = data;
		},
		[inputContent](state, value){
			// state.isError = false;
			// state.data = '';
			state.password = value;
		},
		[INPUTEMAIL](state, value){
			// state.isError = false;
			// state.data = '';
			state.user_email = value;
		}
	},
	actions: {
		[loginRequest]({state, commit, rootState}, value){
			commit('request', {
				loading: true,
				isError: false,
				data: ''
			});
			// 加密密码
			const key = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef');
			const iv = CryptoJS.enc.Hex.parse('abcdef9876543210abcdef9876543210');
			const encrypted = CryptoJS.AES.encrypt(state.password, key, {iv: iv});
			const password_base64 = encrypted.ciphertext.toString(CryptoJS.enc.Base64);

			if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(state.user_email)) {
				commit('OPEN_DIALOG',{
					title: '错误提示',
					content: '邮箱格式错误！',
					button: false,
					multiple: false,
					timer: 1500
				});
				commit('request', {
					loading: false,
					isError: true,
					data: {error: '邮箱格式错误！'}
				});
			} else if (state.password.length < 1) {
				commit('OPEN_DIALOG',{
					title: '错误提示',
					content: '密码不能为空！',
					button: false,
					multiple: false,
					timer: 1500
				});
				commit('request', {
					loading: false,
					isError: true,
					data: {error: '密码不能为空！'}
				});
			} else {
				loginRequestApi({user_email: state.user_email, password: password_base64}).then((response) => {
					commit('request', {loading: false});
					commit('request', {
						loading: false,
						isError: false,
						data: response
					});
					commit('closePopup');
					// 登录成功
					commit('SHOW_MESSAGE', {
						text: '登录成功',
						isError: false,
						isShow: true
					});
					window.location.href = '/home';
					commit('SETUSERINFO', response.data)
				}).catch((err) => {
					commit('OPEN_DIALOG',{
						title: '错误提示',
						content: err.response.data.error,
						button: false,
						multiple: false,
						timer: 1500
					});
					commit('request', {
						loading: false,
						isError: true,
						data: err.response.data.error
					});
					// console.log(err.response.data.error);
				});
			}
		},
		[registerRequest]({state, commit, rootState}, value){
			const encryptionPassword = (passWord) => {
				// 加密密码
				const key = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef');
				const iv = CryptoJS.enc.Hex.parse('abcdef9876543210abcdef9876543210');
				const encrypted = CryptoJS.AES.encrypt(passWord, key, {iv: iv});
				return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
			};
			commit('request', {
				loading: true,
				isError: false,
				data: ''
			});
			const Trim = (str) => {
				return str.replace(/(^\s*)|(\s*$)/g, "");
			};
			if (Trim(state.user_name).length < 1) {
				commit('request', {
					loading: false,
					isError: true,
					data: {error: '用户名不能为空！'}
				});
			} else if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(state.user_email)) {
				commit('request', {
					loading: false,
					isError: true,
					data: {error: '邮箱格式错误！'}
				});
			} else if (!/^(\w){6,15}$/.test(Trim(state.password))) {
				commit('request', {
					loading: false,
					isError: true,
					data: {error: '密码格式错误！'}
				});
			} else if (Trim(state.password) !== Trim(state.confirm_password)) {
				commit('request', {
					loading: false,
					isError: true,
					data: {error: '两次输入密码不一致！'}
				});
			}
			else {
				registerRequestApi({
					email: state.user_email,
					name: state.user_name,
					password: encryptionPassword(state.password)
				})
				.then((response) => {
					commit('request', {loading: false});
					commit('request', {
						loading: false,
						isError: false,
						data: response
					});
					commit('closePopup');
					// 登录成功
					commit('SHOW_MESSAGE', {
						text: '注册成功',
						isError: false,
						isShow: true
					});
					commit('SETUSERINFO', response.data)
				}).catch((err) => {
					commit('request', {
						loading: false,
						isError: true,
						data: err.response.data
					});
				});
			}
		}
	},
	getters: {
		// doneTodosCount () {
		// 	return 66666666666;
		// }
	}
};

export default LoginRegistration;