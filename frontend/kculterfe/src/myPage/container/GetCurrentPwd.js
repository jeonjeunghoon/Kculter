import axios from 'axios';

export async function getCurrentPwd() {
    let list;

    const memberHash = window.sessionStorage.getItem("memberHash")
    
    //await 한 값을 보내준다.
    return await axios.get('/member/pwd', {
        headers: {
            Authorization: memberHash,
        },
        responseType: 'json'
    })
    .then(function(res){
        list = res.data;
        console.warn(list);
        return list;
    })
    .catch(function(error){
        console.log(error);
        return 401;
    });
}