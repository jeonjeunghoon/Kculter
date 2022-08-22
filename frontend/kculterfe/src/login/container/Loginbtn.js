import React from 'react';
import {Link} from 'react-router-dom';
import '../presentation/LoginPage.css';
import '../presentation/LoginPage';
import {hashPwd} from '../presentation/Encryptpwd';
import axios from 'axios';

function Loginbtn(props) {
  const hash = hashPwd(props.email,props.pwd);

  const sendToServer = () => {
    if (props.email === ""){
      alert("Please enter your ID");
    }
    else if (props.pwd === ""){
      alert("Please enter your Password");
    }else{
      //여기는 이제 둘다 정보가 들어있는 경우니 로그인 api를 호출한다.
      axios.get('/member/login',{
        headers :{
          Authorization : hash
        }
      })
      .then(function(res){
        alert(res.data);
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