import { doAxios } from '../api';

function selectUserList(deptId) {
	return doAxios(`${deptId}`);
}

export { selectUserList };
