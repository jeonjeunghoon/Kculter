import axios from 'axios';

export async function getCourseList() {
    let list;
    //await 한 값을 보내준다.
<<<<<<< HEAD
    return await axios.get('/course/0', {
=======
    return await axios.get('/course/1', {
>>>>>>> ffb1f0a5bda6fecafceece4ea589dcc719f29048
        responseType: 'json'
    })
    .then(function(res){
        list = res.data;
        console.log(list);
        return list;
    })
    .catch(function(error){
        console.log(error);
        alert("서버 통신 실패");
    });
}