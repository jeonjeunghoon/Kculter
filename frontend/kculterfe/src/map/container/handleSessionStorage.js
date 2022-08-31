export function modifySessionItem(keyHash, type, title) {
	window.sessionStorage.setItem("keyHash", keyHash);
	window.sessionStorage.setItem("type", type);
	window.sessionStorage.setItem("title", title);
}