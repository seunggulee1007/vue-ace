import { doAxios, doAxiosPost } from './api';

function selectUserList(deptId) {
	return doAxios(`/user/userList/${deptId}`, 'get');
}

function insertUser(data) {
	return doAxiosPost('/user', data);
}
export { selectUserList, insertUser };
