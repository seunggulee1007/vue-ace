import { doAxios } from '../../api';

function selectCustomerList(data) {
	return doAxios('/customer/customerList', 'get', data);
}

function selectCustomer(clientId) {
	return doAxios(`/customer/${clientId}`);
}
function confirmDuple(clientNm) {
	return doAxios(`/customer/confirmDuple/${clientNm}`, 'get');
}

function insertCustomer(data) {
	return doAxios('/customer', 'post', data);
}

function updateCustomer(data) {
	return doAxios('/customer', 'put', data);
}

export { confirmDuple, insertCustomer, updateCustomer, selectCustomerList, selectCustomer };
