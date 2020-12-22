import actions from './actions';
import mutations from './mutations';
import getters from './getters';

let Auth = {
	state: () => ({
		routerMenuList: [],
		menuList: [],
	}),
	getters,
	mutations,
	actions,
};

export default Auth;
