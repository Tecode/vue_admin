import {
	CLOSE_DIALOG,
	OPEN_DIALOG,
	PAGINATION
} from '../actionTypes'


const ArticleEdit = {
	state: {
		dialog: false,
		title: '',
		button: true,
		multiple: true,
		content: '',
		index: 1,
		size: 10,
		callBack: () => {},
	},
	mutations: {
		[CLOSE_DIALOG](state) {
			state.dialog = false;
			state.title = '';
			state.content = '';
			state.button = true;
			state.multiple = true;
			if(state.callBack){
				state.callBack();
			}
			state.callBack = () =>{};
		},
		[OPEN_DIALOG](state, {
										title,
										content,
										button = true,
										multiple = true,
								 		timer,
										callBack,
									}) {
			state.dialog = true;
			state.title = title;
			state.content = content;
			state.button = button;
			state.multiple = multiple;
			if(callBack){
				state.callBack = callBack;
			}
			if (timer) {
				setTimeout(() => {
					state.dialog = false;
					state.title = '';
					state.content = '';
					state.button = true;
					state.multiple = true;
				}, timer)
			}
		},
		[PAGINATION](state, {index, size}) {
			state.index = index;
			state.size = size;
		}
	}
};

export default ArticleEdit;