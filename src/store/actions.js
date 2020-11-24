import { saveCookie } from '@/utils/cookies';
import { loginUser } from '@/api/auth';

export default {
	async LOGIN({ commit }, params) {
		let res = await loginUser(params);
		console.log(res);
		// 결과값이 성공이라면
		if (res.result == 0) {
			let data = res.data;
			commit('setLoginInfo', data);
			saveCookie(process.env.VUE_APP_AUTH_TOKEN, data.authToken);
			saveCookie(process.env.VUE_APP_USER_NM, data.user.userNm);
			saveCookie(process.env.VUE_APP_USER_ID, data.user.userId);
		} else {
			this._vm.$swal({
				title: '알림',
				text: res.resultMsg,
				icon: 'error',
			});
		}

		return res;
	},
};
