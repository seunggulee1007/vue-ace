import { doAxios } from '../api';

function selectDeptList() {
	return doAxios('/dept/deptList', 'get');
}

function selectMenu(deptId) {
	return doAxios(`/dept/${deptId}`, 'get');
}

function updateDept(data) {
	return doAxios('/dept/', 'put', data);
}

function insertDept(data) {
	return doAxios('/dept/', 'post', data);
}

function deleteDept(deptId) {
	return doAxios(`/dept/${deptId}`, 'delete');
}

function moveDept(gu, ord, deptId) {
	return doAxios(`/dept/moveDept/${gu}/${ord}/${deptId}`, 'put');
}

export { selectDeptList, selectMenu, insertDept, updateDept, moveDept, deleteDept };
