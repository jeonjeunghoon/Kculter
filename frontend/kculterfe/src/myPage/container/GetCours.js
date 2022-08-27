import axios from 'axios';

export async function getCourseList() {
    let list;
    // /course/{회원번호}, {회원번호}에 memeber나 session? 에서 정보값을 가지고 와야함 
    return await axios.get('/course/1', {
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