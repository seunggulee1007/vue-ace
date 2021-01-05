import { doAxios, doAxiosPost, doAxiosPut } from '../api';

function selectWorkGroupList(data) {
	return doAxios('/workGroup/list', 'get', data);
}
function confirmDuple(workGroupNm) {
	return doAxios(`/workGroup/dupleGroupNm/${workGroupNm}`, 'get');
}

function insertWorkGroup(data) {
	return doAxiosPost('/workGroup', data);
}

function updateWorkGroup(data) {
	return doAxiosPut('/workGroup', data);
}

export { selectWorkGroupList, confirmDuple, insertWorkGroup, updateWorkGroup };
