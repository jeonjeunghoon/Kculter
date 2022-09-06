import React, { useState, useEffect } from 'react';
import { Form, Container } from 'react-bootstrap';
import { ChangeNewPwd } from '../../container/ChangeNewPwd';
import { CheckPwd } from '../../container/CheckPwd';
import { ResignMembership } from '../../container/ResignMembership';
import { Modal } from 'react-bootstrap';
import InfoContainer from '../common/InfoContainer';
import ColorButton from '../common/ColorButton';
import styled from 'styled-components';

export default function EditPwdInfo() {
  const [NewPwd, setNewPwd] = useState(''); //신비밀번호
  const [CurrentPwd, setCurrentPwd] = useState(false); // 구비밀번호

  //오류 메시지
  const [cfPwdStyle,setCfPwdStyle] = useState(false);
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
      setCfPwdStyle(true);
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
    if (await checkPwd() != 200) {
      return ;
    }
    if (isPasswordConfirm == false) {
      alert("Check confirm new password")
    }
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
      return result;
      
    }else{
      alert("Check current password")
      return result;
    }
  }

  return (
    <>
      <InfoContainer id="my-info">
          {/* 현재 비밀번호 */}
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <InfoText>Current Password</InfoText>
          <Form.Control type="password" placeholder="Current Password" onChange={checkCurrentPassword}/>
        </Form.Group>

        {/* 새로운 비밀번호 */}
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <InfoText>New Password</InfoText>
          <Form.Control type="password" placeholder="New Password" onChange={checkNewPassword}/>
          <text className={`message ${isPwd ? 'success' : 'error'} display-linebreak`}>{pwdMessage}</text>
        </Form.Group>

        {/* 새로운 비밀번호 확인 */}
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <InfoText>Confirm New Password</InfoText>
          <Form.Control type="password" placeholder="Confirm New Password" onChange={onChangePasswordConfirm}/>
          <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
        </Form.Group>

        {/* 비밀번호 변경 버튼 */}
        <div className="text-center">
          <button style={{color:'white'}} disabled={!(cfPwdStyle&&isPasswordConfirm)} className="close-btn" onClick={newPasswordConfirm}>New password confirm</button>
        </div>

      </InfoContainer>
      {/* 회원 탈퇴 버튼 */}
      <div className="text-center m-5">
        <ColorButton disabled='true' text={'Resign membership'} onClick={handleShow}></ColorButton>
      </div>
      
      {/* 회원탈퇴 Modal 창 */}
      <Modal className={""} show={show} onHide={handleClose}>
        <Modal.Body>
          After deleting account, you cannot use ‘K-culter Login’ to sign-in other sites.
        </Modal.Body>
        <Modal.Footer>
          <input type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)} />I check all instructions and agree.
          <ColorButton color={pink} check={bChecked} text={'Resign'} disabled={bChecked} onClick={resignConfirm}>
          </ColorButton>
          <ColorButton color={blue} check='true' disabled='true' text={'Cancel'} onClick={handleClose}>
            Cancel
          </ColorButton>
        </Modal.Footer>
      </Modal>
    </>
  )
}

// css

const blue = '#1755d1';
const pink = '#f4029b';

const InfoText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1px;
`