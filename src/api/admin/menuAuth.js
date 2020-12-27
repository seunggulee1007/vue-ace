import { doAxios } from '../api';

function insertMenuAuth(data) {
	return doAxios('/menuAuth', 'post', data);
}

function updateMenuAuth(data) {
	return doAxios('/menuAuth', 'put', data);
}

export { insertMenuAuth, updateMenuAuth };
