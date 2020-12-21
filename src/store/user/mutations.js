export default {
	setUserInfo(state, data) {
		console.log('유저 인포 저장 ?');
		state.userNm = data.user.userNm;
		state.adminYn = data.user.adminYn;
	},
	clearUserInfo(state) {
		state.userNm = '';
		state.adminYn = 'N';
		state.adminView = false;
	},
	setAdminView(state) {
		console.log('호출됨 !');
		state.adminView = !state.adminView;
	},
};
