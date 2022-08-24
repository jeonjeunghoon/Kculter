import React from 'react';
import {Link} from 'react-router-dom';
import '../presentation/LoginPage.css';
import '../presentation/LoginPage';
import {hashPwd} from '../presentation/Encryptpwd';
import axios from 'axios';
import { useDispatch ,useSelector } from 'react-redux';
import { PUSH_MEMBER } from "../../redux/reducer";


function Loginbtn(props) {
  const hash = hashPwd(props.email,props.pwd);
  const dispatch = useDispatch();

  const member = {
    memberNum : 1,
      email : 'hankgood95@naver.com',
      pwd : '1234',
      nickName : 'passcucci',
      countryCode : 'KR',
      age : 28,
      gender : 'male',
      pf_image: 'https://kculter-image.s3.ap-northeast-2.amazonaws.com/user.png'
  }

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
        dispatch({
          type:PUSH_MEMBER,
          data: member,
        })
      })
      .catch(function(error){
        console.log(error);
        alert("login failure");
      })
    }
  }

  const onKeyPress = (e) => {
    if(e.key == 'Enter'){
      sendToServer();
    }
  }



 
  return (
      <button className="login-btn" onClick={sendToServer} onKeyPress={onKeyPress}>LOGIN</button>
  )
}
export default Loginbtn;