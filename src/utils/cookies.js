function saveCookie(name, value) {
	document.cookie = `${name}=${value}`;
}

function getCookie(name) {
	let regex = '(?:(?:^|.*;\\s*){name}\\s*=\\s*([^;]*).*$)|^.*$';
	regex = new RegExp(regex.replace(/{name}/gi, name));
	return document.cookie.replace(regex, '$1');
}

function deleteCookie(value) {
	document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export { saveCookie, getCookie, deleteCookie };
