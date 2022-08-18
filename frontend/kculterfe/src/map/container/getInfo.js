import axios from 'axios';

export function getKpop(setter, setIsLoadedApi) {
	axios.get("/place" + "?key=" + 1 + "&type=" + "kpop")
	.then(function(res){
		console.log('통신 완료');
		setter(res);
		setIsLoadedApi((prevState) => {
			return { ...prevState, kpop: true}
		})
		console.log(res);
  })
  .catch(function(error){
		console.log(error, "서버 통신 실패");
  })
}

// export function getKpop(setter, setIsLoadedApi) {
// 	axios.get("/culture" + "?key=" + 2 + "&type=" + "culture")
// 	.then(function(res){
// 		console.log('통신 완료');
// 		setter(res);
// 		setIsLoadedApi((prevState) => {
// 			return { ...prevState, culture: true}
// 		})
// 		console.log(res);
//   })
//   .catch(function(error){
// 		console.log(error, "서버 통신 실패");
//   })
// }

// export function getKpop(setter, setIsLoadedApi) {
// 	axios.get("/stay" + "?key=" + 3 + "&type=" + "stay")
// 	.then(function(res){
// 		console.log('통신 완료');
// 		setter(res);
// 		setIsLoadedApi((prevState) => {
// 			return { ...prevState, stay: true}
// 		})
// 		console.log(res);
//   })
//   .catch(function(error){
// 		console.log(error, "서버 통신 실패");
//   })
// }

// export function getTour(setter, setIsLoadedApi) {
// 	axios.get("/tour" + "?key=" + 4 + "&type=" + "tour")
// 	.then(function(res){
// 		console.log('통신 완료');
// 		setter(res);
// 		setIsLoadedApi((prevState) => {
// 			return { ...prevState, tour: true}
// 		})
// 		console.log(res);
//   })
//   .catch(function(error){
// 		console.log(error, "서버 통신 실패");
//   })
// }