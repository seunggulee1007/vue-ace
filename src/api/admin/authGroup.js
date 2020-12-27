import { doAxios, doAxiosPost } from '../api';

function confirmDuple(authGroupNm) {
	return doAxios(`/authGroup/confirmDuple/${authGroupNm}`, 'get');
}

function insertAuthGroup(data) {
	return doAxiosPost('/authGroup', data);
}

function updateAuthGroup(data) {
	return doAxiosPost('/authGroup', data);
}

function deleteAuthGroup(authGroupId) {
	return doAxios(`/authGroup/${authGroupId}`, 'delete');
}

export { confirmDuple, insertAuthGroup, updateAuthGroup, deleteAuthGroup };
