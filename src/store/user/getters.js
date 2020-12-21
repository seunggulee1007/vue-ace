export default {
	getUserNm(state) {
		return state.userNm;
	},
	isAdmin(state) {
		console.log(state);
		return state.adminYn == 'Y';
	},
	adminView(state) {
		return state.adminView;
	},
};
