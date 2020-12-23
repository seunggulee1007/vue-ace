import actions from './actions';
import mutations from './mutations';
import getters from './getters';

let Modal = {
	state: () => ({
		userModal: false,
		deptModal: false,
	}),
	getters,
	mutations,
	actions,
};

export default Modal;
