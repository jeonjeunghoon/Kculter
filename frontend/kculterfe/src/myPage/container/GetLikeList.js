import axios from 'axios';

export async function getLikeList() {
    let list;
    //await 한 값을 보내준다.
    return await axios.get('/celebrities', {
        responseType: 'json'
    })
    .then(function(res){
        list = res.data;
        return list;
    })
    .catch(function(error){
        return ;
    });
}