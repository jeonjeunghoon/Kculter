import axios from 'axios';

export async function ResignMembership() {
    let result;

    const memberHash = window.sessionStorage.getItem("memberHash")

    //await 한 값을 보내준다.
    return await axios.put('/member/secession',null, {
        headers: {
            Authorization: memberHash,
        },
        responseType: 'json'
    })
    .then(function(res){
        result = res.data;
        return result;
    })
    .catch(function(error){
        console.log(error);
        return 401;
    });
}