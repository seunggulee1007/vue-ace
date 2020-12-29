export default {
	setUserInfo(state, data) {
		state.userNm = data.user.userNm;
		state.adminYn = data.user.adminYn;
		state.adminView = false;
	},
	clearUserInfo(state) {
		state.userNm = '';
		state.adminYn = 'N';
		state.adminView = false;
	},
	setAdminView(state) {
		state.adminView = !state.adminView;
	},
};
