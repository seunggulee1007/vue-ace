export default {
	getUserNm(state) {
		return state.userNm;
	},
	isAdmin(state) {
		return state.adminYn == 'Y';
	},
	adminView(state) {
		return state.adminView;
	},
};
