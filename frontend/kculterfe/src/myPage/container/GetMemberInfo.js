import axios from 'axios';

export async function getMemberInfo() {
    let list;
    //await 한 값을 보내준다.
    const keyHash = window.sessionStorage.getItem("keyHash")

    return await axios.get('/member', {
        headers: {
            Authorization: keyHash,
        },
        responseType: 'json'
    })
    .then(function(res){
        list = res.data;
        console.log(res);
        return list;
    })
    .catch(function(error){
        alert("서버 통신 실패");
    });
}