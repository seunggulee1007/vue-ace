import { doAxios, doAxiosPost, doAxiosPut } from './api';

function selectUserList(deptId) {
	return doAxios(`/user/userList/${deptId}`, 'get');
}

function insertUser(data) {
	return doAxiosPost('/user', data);
}

function updateUser(data) {
	return doAxiosPut('/user', data);
}
export { selectUserList, insertUser, updateUser };
