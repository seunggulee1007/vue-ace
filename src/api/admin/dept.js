import { doAxios } from '../api';

function selectDeptList() {
	return doAxios();
}
function insertDept() {
	return doAxios();
}

function updateDept() {
	return doAxios;
}

function deleteDept(deptId) {
	return doAxios(`/${deptId}`);
}

function moveDept(gu, ord, parDeptId) {
	return doAxios(`/${gu}/${ord}/${parDeptId}`);
}

export { selectDeptList, insertDept, updateDept, moveDept, deleteDept };
