export default {
	setUserModal(state) {
		state.userModal = !state.userModal;
	},
	setDeptModal(state) {
		state.deptModal = !state.deptModal;
	},
	closeUserModal(state) {
		state.userModal = false;
	},
	closeDeptModal(state) {
		state.deptModal = false;
	},
};
