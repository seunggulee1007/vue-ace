import { doAxios } from '../api';

function getSelectBox(codeGroup) {
	return doAxios(`/common/code/${codeGroup}`, 'get');
}

export { getSelectBox };
