import React, { useState, useMemo, useEffect } from 'react';
import { Form, Container } from 'react-bootstrap';
import './MyInfo.css';
import '../../../login/presentation/Signup.css';
// import crypto from 'crypto-js';
import axios from 'axios';
import { ChangeNewPwd } from '../../container/ChangeNewPwd';
import { CheckPwd } from '../../container/CheckPwd';
import { hashPwd }  from '../../container/Encryptpwd';

export default function EditPwdInfo() {
  const [NewPwd, setNewPwd] = useState(''); //신비밀번호
  const [isCurrentPwd, setIsCurrentPwd] = useState(false); //구비밀번호

  //버튼 비활성화
  const [confirmBt,setConfirmBt] = useState(false);
  const [confirmPwd,setConfirmPwd] = useState(true);

  //오류 메시지
  const [cfPwdStyle,setCfPwdStyle] = useState(false);
  const [verifyMessage, setVerMessage] = useState('');
  const [isPwd, setIsPwd] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [pwdMessage, setPwdMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

  const checkCurrentPassword = (e) => {
    const value = e.target.value;
    setIsCurrentPwd(value);
  }

  const checkNewPassword = (e) => {
    //  8 ~ 10자 영문, 숫자 조합
    let regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,50}$/
    // 형식에 맞는 경우 true 리턴
    const pwdRegex = e.target.value;
    if(pwdRegex === ""){
      setPwdMessage("");
      setIsPwd(false);
    }
    else if (!regExp.test(pwdRegex)) {
      setPwdMessage('Must contain number, lowercase letter,\n specialcharecter(!@#$%^*+=-),\n and should be minimum 8 characters');
      setIsPwd(false);
    }
    else
    {
      setNewPwd(pwdRegex);
      setPwdMessage('OK :)');
      setIsPwd(true);
    }
  }

  const onChangePasswordConfirm = (e) => {
    const passwordConfirmCurrent = e.target.value
    if(passwordConfirmCurrent === ""){
      setPasswordConfirmMessage('')
      setIsPasswordConfirm(false)
    }
    else if (NewPwd === passwordConfirmCurrent) {
      setPasswordConfirmMessage('OK :)');
      setIsPasswordConfirm(true);
      setNewPwd(NewPwd); //그냥 비밀번호로 세팅
    }else{
      setPasswordConfirmMessage('The password is different')
      setIsPasswordConfirm(false)    
    }
  }

  const newPasswordConfirm = async () =>{
    const result = await ChangeNewPwd(NewPwd);
    if(result == 200){
      alert("Password update success");
      window.location.reload();
    }else{
      alert("Password update fail \nPlease contact to hankgood958@gmail.com");
      window.location.reload();
    }
  }

  const checkPwd = async () =>{
    const result = await CheckPwd(isCurrentPwd);
    if(result == 200){
      //200이면 이제 잘 받아왔으니 OK 띄워주고 disabled를 풀어줘야 함
      setVerMessage("OK");
      setConfirmPwd(false);
      setCfPwdStyle(true);
      setConfirmBt(true);
      
    }else{
      setVerMessage("Wrong password");
      setConfirmPwd(true);
      setCfPwdStyle(false);
    }
  }

  return (
    <Container id="my-info">
        {/* 현재 비밀번호 */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Current Password</Form.Label>
        <Form.Control disabled={confirmBt} type="password" placeholder="Current Password" onChange={checkCurrentPassword}/>
        <span className={`message ${cfPwdStyle ? 'success' : 'error'}`}>{verifyMessage}</span>
        <button disabled={confirmBt} style={{color:'white'}} className="close-btn" onClick={checkPwd}>confirm</button>
      </Form.Group>

      {/* 새로운 비밀번호 */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control disabled={confirmPwd} type="password" placeholder="New Password" onChange={checkNewPassword}/>
        <text className={`message ${isPwd ? 'success' : 'error'} display-linebreak`}>{pwdMessage}</text>
      </Form.Group>

      {/* 새로운 비밀번호 확인 */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm New Password</Form.Label>
        <Form.Control disabled={confirmPwd} type="password" placeholder="Confirm New Password" onChange={onChangePasswordConfirm}/>
        <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
      </Form.Group>

      {/* 비밀번호 변경 버튼으로 해야 할듯? */}
      <button style={{color:'white'}} disabled={!(cfPwdStyle&&isPasswordConfirm)} className="close-btn" onClick={newPasswordConfirm}>confirm</button>
    </Container>
  )
}