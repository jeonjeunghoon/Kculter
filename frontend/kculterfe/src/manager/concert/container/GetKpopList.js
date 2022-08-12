import axios from 'axios';

export async function getKpopList() {
    let list;
    return await axios.get('/celebrities')
    .then(function(res){
        list = res.data;
        return list;
    })
    .catch(function(error){
        console.log(error);
        alert("서버 통신 실패");
    });
}