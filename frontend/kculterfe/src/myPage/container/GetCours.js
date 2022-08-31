import axios from 'axios';

export async function getCourseList() {
    let list;
    // /course/{회원번호}, {회원번호}에 memeber나 session? 에서 정보값을 가지고 와야함
    const memberHash = window.sessionStorage.getItem("memberHash")

    return await axios.get('/course/'+ memberHash, {
        responseType: 'json'
    })
    .then(function(res){
        list = res.data;
        return list;
    })
    .catch(function(error){
        console.log(error);
        return 
    });
}