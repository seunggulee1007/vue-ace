import { selectDeptList } from '@/api/admin/dept';
export default {
	async DEPTLIST({ commit }) {
		let res = await selectDeptList();
		if (res.result == 0) {
			let treeData = res.data;
			treeData.isOpen = true;
			commit('setTreeData', treeData);
		}
	},
};
