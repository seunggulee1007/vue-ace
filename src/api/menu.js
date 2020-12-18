import { doAxios } from './api';

function selectRouterMenuList() {
	return doAxios('/common/menuList', 'get');
}

function selectMenuList() {
	return doAxios('/menu/menuList', 'get');
}
export { selectRouterMenuList, selectMenuList };
