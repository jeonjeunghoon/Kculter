import axios from 'axios';

export async function getPlaceApi(url, key, type) {
	return await axios.get(url + "?key=" + key + "&type=" + type)
	.then(function(res) {
		return res;
  })
  .catch(function(error) {
		console.log(error);
  })
}

export async function getPinApi(url, key) {
	return await axios.get(url + "?key=" + key)
	.then(function(res) {
		return res;
	})
	.catch(function(error) {
		console.log(error);
	})
}