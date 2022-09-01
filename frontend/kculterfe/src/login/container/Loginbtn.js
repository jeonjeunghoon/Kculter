import React, {forwardRef, useImperativeHandle} from 'react';
import {Link} from 'react-router-dom';
import '../presentation/LoginPage.css';
import '../presentation/LoginPage';
import {hashPwd} from '../presentation/Encryptpwd';
import axios from 'axios';

function Loginbtn (props) {
  //이 멤버를 세션 스토리지에 저장을 해야한다. 
  const sendToServer = () => {
    if (props.email === ""){
      alert("Please enter your ID");
    }
    else if (props.pwd === ""){
      alert("Please enter your Password");
    }else{
      //여기는 이제 둘다 정보가 들어있는 경우니 로그인 api를 호출한다.
      const hash = hashPwd(props.email+"/"+props.pwd);
      axios.get('/member/login',{
        headers :{
          Authorization : hash
        }
      })
      .then(function(res){
        const result = res.data;
        if (result == "")
        {
          alert("login fail");
        }
        else{
          console.log("Hi welcome to Kculter");
          window.sessionStorage.setItem("memberHash",result.memberHash);
          window.sessionStorage.setItem("memberName",result.memberName);
          window.sessionStorage.setItem("pfUrl",result.pfUrl);
          window.sessionStorage.setItem("mgHash",result.mgHash);
          window.location.href= "/";
        }
      }
      )
      .catch(function(error){
        console.log(error);
      })
    }
  }
 
  return (
      <button className="login-btn" onClick={sendToServer}>LOGIN</button>
  )
}
export default Loginbtn;