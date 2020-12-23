import { doAxios } from './api';

function selectUserList(deptId) {
	return doAxios(`/user/userList/${deptId}`, 'get');
}

export { selectUserList };
