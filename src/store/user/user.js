import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
	state: () => ({
		userNm: '',
		adminYn: '',
		adminView: false,
	}),
	getters,
	mutations,
	actions,
};
