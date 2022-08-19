import axios from 'axios';

export function checkNick(nickname){
  axios.get("/member/nicknamedup?nickname="+nickname)
  .then(function(res){
    if(res.data == 1){
      alert("사용가능한 닉네임입니다.");
  }
  else {
    alert("사용 불가능한 닉네임입니다.")
  }
})
.catch(function(error){
  console.log(error);
})
}