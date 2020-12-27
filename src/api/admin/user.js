import { doAxios, doAxiosPostMultipart, doAxiosPutMultipart } from '../api';

function selectUserList(deptId) {
	return doAxios(`/user/userList/${deptId}`, 'get');
}

function insertUser(data) {
	return doAxiosPostMultipart('/user', data);
}

function updateUser(data) {
	return doAxiosPutMultipart('/user', data);
}
export { selectUserList, insertUser, updateUser };
