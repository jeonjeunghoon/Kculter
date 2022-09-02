import axios from 'axios';

export async function resignMembership() {
    let list;

    const memberHash = window.sessionStorage.getItem("memberHash")
    
    //await 한 값을 보내준다.
    return await axios.post('/member/secession', {
        headers: {
            Authorization: memberHash,
        },
        responseType: 'json'
    })
    .then(function(res){
        list = res.data;
        return list;
    })
    .catch(function(error){
        console.log(error);
        return 401;
    });
}