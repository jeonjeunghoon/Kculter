import axios from 'axios';

export function checkEmail(email){
  axios.get("/member/emaildup?email="+email) //조회시 사용, 중복검사 
  .then(function(res){
    if(res.data == 1){
      alert("사용가능한 이메일 입니다.");
    }else{
      alert("사용 불가능한 이메일 입니다.");
    }
  })
  .catch(function(error){
    console.log(error);
  })
}