import axios from 'axios';
import { setInterceptors } from '@/api/common';
import { deleteCookie } from '@/utils/cookies';
import router from '@/router/router';
import store from '@/store/store';

function createInstance() {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}/api`,
	});
	return setInterceptors(instance);
}

const instance = createInstance();

function doAxios(url, method, params, config) {
	store.state.spinnerStatus = true;
	return instance({
		url,
		method,
		params,
		config,
	})
		.then(({ data }) => {
			store.state.spinnerStatus = false;
			return data;
		})
		.catch(error => {
			store.state.spinnerStatus = false;
			let res = {
				result: -1,
			};
			if (error.response) {
				console.log('error.response');
				res = error.response.data;
				res.status = error.response.status;
			} else if (!error.status) {
				console.log('status');
				res.resultMsg = '네트워크 연결을 확인해 주세요';
			} else if (error.response.status == 401) {
				// 인증 오류라면 메인 페이지로
				// 쿠키에서 인증정보 삭제 후
				deleteCookie(process.env.VUE_APP_AUTH_TOKEN);
				router.push('/');
			} else {
				console.log('else');
				res.data.resultMsg = error.message;
			}
			return res;
		});
}
export { createInstance, doAxios };
