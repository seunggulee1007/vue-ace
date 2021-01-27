import actions from './actions';
import mutations from './mutations';
import getters from './getters';

let Auth = {
	state: () => ({
		routerMenuList: [],
		menuList: [],
		treeData: [],
		menuOpen: false,
	}),
	getters,
	mutations,
	actions,
};

export default Auth;
