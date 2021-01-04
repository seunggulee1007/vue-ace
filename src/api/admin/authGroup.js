import { doAxios, doAxiosPost, doAxiosPut } from '../api';

// 권한 그룹 리스트
function selectAuthgroupList() {
	return doAxios('/authGroup/authGroupList');
}

// 권한 명 중복 체크
function confirmDuple(authGroupNm) {
	return doAxios(`/authGroup/confirmDuple/${authGroupNm}`, 'get');
}

// 권한 등록
function insertAuthGroup(data) {
	return doAxiosPost('/authGroup', data);
}

// 권한 수정
function updateAuthGroup(data) {
	return doAxiosPut('/authGroup', data);
}

// 권한 삭제
function deleteAuthGroup(authGroupId) {
	return doAxios(`/authGroup/${authGroupId}`, 'delete');
}

export { selectAuthgroupList, confirmDuple, insertAuthGroup, updateAuthGroup, deleteAuthGroup };
