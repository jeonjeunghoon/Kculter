import React from 'react';
import {Link} from 'react-router-dom';
import '../presentation/LoginPage.css';
import '../presentation/LoginPage';
import axios from 'axios';

function Loginbtn(props) {
  const email = props.email;
  const pwd = props.pwd;
  const member = {
    email : email,
    pwd : pwd
  }
  const sendToServer = () => {
    if (email === ""){
      alert("Please enter your ID");
    }
    else if (pwd === ""){
      alert("Please enter your Password");
    }else{
      //여기는 이제 둘다 정보가 들어있는 경우니 로그인 api를 호출한다.
      axios.get('/member/login',{
        headers :{
          email : member.email,
          pwd : member.pwd
        }
      })
      .then(function(res){
        alert(res.date);
      })
      .catch(function(error){
        console.log(error);
        alert("login failure");
      })
    }
  }
 
  return (
    <>
      <button className="login-btn" onClick={sendToServer}>LOGIN</button>
    </>
  )
}
export default Loginbtn;