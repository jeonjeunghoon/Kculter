import React, { useState, useEffect } from 'react';
import { Form, Container } from 'react-bootstrap';
import './MyInfo.css';
import '../../../login/presentation/Signup.css';
import { ChangeNewPwd } from '../../container/ChangeNewPwd';
import { CheckPwd } from '../../container/CheckPwd';
import { ResignMembership } from '../../container/ResignMembership';
import { Modal } from 'react-bootstrap';

export default function EditPwdInfo() {
  const [NewPwd, setNewPwd] = useState(''); //신비밀번호
  const [CurrentPwd, setCurrentPwd] = useState(false); // 구비밀번호

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

  // 회원탈퇴 modal state
  const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  // 회원탈퇴 체크박스(탈퇴하기전 체크)
  const [bChecked, setbChecked] = useState(false);

  // 지금 패스워드 체크
  const checkCurrentPassword = (e) => {
    const value = e.target.value;
    setCurrentPwd(value);
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

  // 회원탈퇴 체크
  const checkHandler = ({ target }) => {
    setbChecked(!bChecked);
  };

  // 회원탈퇴 버튼
  const resignConfirm = async () =>{
    const result = await ResignMembership(NewPwd);
    if(result == 200){
      alert("Resign success");
      window.location.reload();
    }else{
      alert("Resign fail \nPlease contact to hankgood958@gmail.com");
    }
  }

  const checkPwd = async () =>{
    const result = await CheckPwd(CurrentPwd);
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

      {/* 비밀번호 변경 버튼 */}
      <button style={{color:'white'}} disabled={!(cfPwdStyle&&isPasswordConfirm)} className="close-btn" onClick={newPasswordConfirm}>confirm</button>

      {/* 회원 탈퇴 버튼 */}
      <div>
        <button style={{color:'white'}} className="close-btn" onClick={handleShow}>Resign membership</button>
      </div>

      <Modal className={""} show={show} onHide={handleClose}>
          회원 탈퇴
        <Modal.Body>
          회원 탈퇴할시 사항들
        </Modal.Body>
        <Modal.Footer>
          <input type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)} />회원탈퇴
          <button disabled={!bChecked} onClick={resignConfirm}>
            회원탈퇴 버튼
          </button>
          <button onClick={handleClose}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>

    </Container>
  )
}