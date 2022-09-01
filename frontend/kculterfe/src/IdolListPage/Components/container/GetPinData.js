import axios from 'axios';

export async function getPin(type, keyHash) {
    let list;
    //await 한 값을 보내준다.
    console.log("/pin/kpop?keyHash=" + keyHash);
    if (type == 1)
    {
        return await axios.get("/pin/kpop?keyHash=" + keyHash, {
            responseType: 'json'
        })
        .then(function(res){
            list = res.data;
            // console.log(list);
            return list;
        })
        .catch(function(error){
            console.log(error);
            alert("서버 통신 실패");
        });
    } else if (type == 2) {
        return await axios.get("/pin/culture?keyHash=" + keyHash, {
            responseType: 'json'
        })
        .then(function(res){
            list = res.data;
            // console.log(list);
            return list;
        })
        .catch(function(error){
            console.log(error);
            alert("서버 통신 실패");
        });
    } else {
        return alert("컬처 타입 오류");
    }
}
