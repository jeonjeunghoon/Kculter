import axios from 'axios';

export async function  EditMemberInfo(formData) {
    let result;
    console.log(formData);
    return await axios.put("/member",formData)
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