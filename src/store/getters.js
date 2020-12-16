export default {
	isLogin(state) {
		return state.token !== '';
	},
	getToken(state) {
		return state.token;
	},
	getUserId(state) {
		return state.userId;
	},
	sectionPush(state) {
		return state.sectionPush;
	},
	spinnerStatus(state) {
		return state.spinnerStatus;
	},
	isAdmin(state) {
		return state.adminYn == 'Y';
	},
	adminView(state) {
		return state.adminView;
	},
};
