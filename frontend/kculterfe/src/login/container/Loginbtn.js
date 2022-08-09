import React from 'react';
import {Link} from 'react-router-dom';
import '../presentation/LoginPage.css';
import '../presentation/LoginPage';

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
    }
    console.log(member);
  }
 
  return (
    <>
      <button onClick={sendToServer}>LOGIN</button>
    </>
  )
}
export default Loginbtn;