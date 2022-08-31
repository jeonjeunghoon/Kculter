import React, { useState, useMemo, useEffect } from 'react';
import { Form, Container } from 'react-bootstrap';
import './MyInfo.css';
// import crypto from 'crypto-js';
import axios from 'axios';
import { ChangeNewPwd } from '../../container/ChangeNewPwd';
import { hashPwd }  from '../../container/Encryptpwd';

export default function EditPwdInfo() {
  const [NewPwd, setNewPwd] = useState(''); //비밀번호
  const [isCurrentPwd, setIsCurrentPwd] = useState(false);
  const [isNewPwd, setIsNewPwd] = useState(false);
  const [isNewPwdConfirm, setIsNewPwdConfirm] = useState(false);

  const checkCurrentPassword = (e) => {
    //  8 ~ 10자 영문, 숫자 조합
    let regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,50}$/
    // 형식에 맞는 경우 true 리턴
    const pwdRegex = e.target.value;
      if(pwdRegex === ""){
        setIsCurrentPwd(false);
      }
      else if (!regExp.test(pwdRegex)) {
        setIsCurrentPwd(false);
      }
      // 현재 패스워드와 비교해서 맞는지 확인.
      // else if (regExp != currentPwd) {
      //   setPwdMessage('Please enter a correct password.');
      //   setIsPwd(false);
      // }
      else {
        setIsCurrentPwd(true);
      }
  }

  const checkNewPassword = (e) => {
    //  8 ~ 10자 영문, 숫자 조합
    let regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,50}$/
    // 형식에 맞는 경우 true 리턴
    const pwdRegex = e.target.value;
      if(pwdRegex === ""){
        setIsNewPwd(false);
      }
      else if (!regExp.test(pwdRegex)) {
        setIsNewPwd(false);
      }
      else if (pwdRegex == isNewPwd) {
        setNewPwd("");
        setIsNewPwd(false);
      }
      else {
        setNewPwd(pwdRegex);
        setIsNewPwd(true);
      }
  }

  const onChangePasswordConfirm = (e) => {
    const NewPwdConfirm = e.target.value
    if(NewPwdConfirm === ""){
      setIsNewPwdConfirm(false)
    }
    else if (NewPwd === NewPwdConfirm) {
      setIsNewPwdConfirm(true);
      setNewPwd(hashPwd(NewPwd));
    }else{
      setIsNewPwdConfirm(false)    
    }
  }

  const newPasswordConfirm = async () =>{
    if (NewPwd == "") { alert("put password"); }
    else if (isCurrentPwd == false) { alert("please check current password"); }
    else if (isNewPwdConfirm == false) { alert("please check New password"); }
    else {
      const result = await ChangeNewPwd(NewPwd);
      if(result == 1) {
        alert("Success on change new password");
      }else{
        alert("New password change failed");
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/member").then(res => console.log(res.data)) // 기존 비밀번호 받아와야 함
  }

  return (
    <Container id="my-info">
        {/* 현재 비밀번호 */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Current Password</Form.Label>
        <form onSubmit={handleSubmit}>
          <Form.Control type="password" placeholder="Current Password" onChange={checkCurrentPassword}/>
        </form>
      </Form.Group>

      {/* 새로운 비밀번호 */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="password" placeholder="New Password" onChange={checkNewPassword}/>
      </Form.Group>

      {/* 새로운 비밀번호 확인 */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm New Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm New Password" onChange={onChangePasswordConfirm}/>
      </Form.Group>

      {/* 비밀번호 변경 버튼으로 해야 할듯? */}
      <button className="close-btn" onClick={newPasswordConfirm}>confirm</button>
    </Container>
  )
}