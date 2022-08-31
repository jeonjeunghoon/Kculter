import axios from 'axios';

export async function getCourseList() {
    let list;
    // /course/{회원번호}, {회원번호}에 memeber나 session? 에서 정보값을 가지고 와야함
    const memberNum = window.sessionStorage.getItem("memberNum")

    console.log(memberNum);
    return await axios.get('/course/'+ 1, {
        responseType: 'json'
    })
    .then(function(res){
        list = res.data;
        return list;
    })
    .catch(function(error){
        console.log(error);
        alert("코스 저장한게 없음");
    });
}