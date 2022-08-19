import axios from 'axios';

export async function getPlaceApi(url, key, type) {
	return await axios.get(url + "?key=" + key + "&type=" + type)
	.then(function(res){
		console.log(res, '통신 완료');
		return res;
  })
  .catch(function(error){
		console.log(error, "서버 통신 실패");
  })
}
