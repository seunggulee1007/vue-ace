export default {
	/**
	 * 로그인 이후 state에  데이터 저장
	 * @param {*} state
	 * @param {*} data
	 */
	setLoginInfo(state, data) {
		state.userId = data.user.userId;
		state.token = data.authToken;
		state.userNm = data.user.userNm;
	},
	/**
	 * 로그 아웃 이후 state에 내용 빈값으로 초기화
	 * @param {*} state
	 */
	clearLoginInfo(state) {
		state.userId = '';
		state.token = '';
		state.userNm = '';
	},
	setSpinnerStatus(state) {
		state.spinnerStatus = !state.spinnerStatus;
	},
	setSectionPush(state) {
		state.sectionPush = !state.sectionPush;
	},
};
