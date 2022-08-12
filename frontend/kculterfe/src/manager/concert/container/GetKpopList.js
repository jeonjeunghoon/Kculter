import axios from 'axios';

export function getKpopList(setKpop) {
    let list;
    axios.get('/celebrities')
    .then(function(res){
        console.log(res.data);
        return res.data;
    })
    .catch(function(error){
        console.log(error);
        alert("서버 통신 실패");
    });
}