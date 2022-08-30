import axios from 'axios';

export async function  ChangeNewPwd(newPwd) {
    let result;
    console.log(newPwd);
    return await axios.put("/member/회원비번정보",newPwd)
    .then(function(res){
        result = res.data;
        return result;        
    })
    .catch(function(error){
        console.log(error);
        result = 500;
        return result;
    })
}