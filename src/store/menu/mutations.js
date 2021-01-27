export default {
	setRouterMenuList(state, routerMenuList) {
		state.routerMenuList = routerMenuList;
	},
	setMenuList(state, menuList) {
		state.menuList = menuList;
	},
	setTreeData(state, treeData) {
		state.treeData = treeData;
	},
	setMenuOpen(state) {
		state.menuOpen = !state.menuOpen;
	},
};
