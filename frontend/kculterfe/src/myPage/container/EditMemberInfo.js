import axios from 'axios';

export async function  EditMemberInfo(formValue) {
    let result;

    console.log(formValue);

    return await axios.put('/member', formValue, {
        headers: {
            'Content-Type' : 'multipart/form-data'
        }
    })
    .then(function(res){
        result = res.data;
        console.log(result);
        alert("서버 저장 완료!");
        window.location.href="/manager";
        return result;        
    })
    .catch(function(error){
        console.log(error);
        result = 500;
        return result;
    })
}