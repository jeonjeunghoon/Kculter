import React, { useCallback, useState} from 'react';
import { Link } from 'react-router-dom';
import {Modal, Button, Form, Container} from 'react-bootstrap';
import '../presentation/Signup.css';
import '../presentation/CountryList';
import CountrySelector from '../presentation/CountryList';
import Select from 'react-select'
import {checkEmail} from '../container/EmailCheck';

function SignUpModal({show, onHide}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('')
  
  /*오류메세지*/
  const [emailMessage, setEmailMessage] = useState('')
  const [pwdMessage, setPwdMessage] = useState('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')
  
  /*유효성 검사*/
  const [isEmail, setIsEmail] = useState(false);
  const [isPwd, setIsPwd] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)

  /*버튼 disabled만들기 위해 */
  const [emailBtDis,setEmailBtDis] = useState(true);

const checkPassword = (e) => {
  //  8 ~ 10자 영문, 숫자 조합
  var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
  // 형식에 맞는 경우 true 리턴
  const pwdRegex = e.target.value;
    setPassword(pwdRegex);
    if (!regExp.test(pwdRegex)) {
      setPwdMessage('least 7 digits, 1 English characters');
    }
    else
    {
      setPwdMessage('OK :)');
      setIsPwd(true);
    }
}

const onChangeEmail = (e) => {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    const emailRegex = e.target.value;
    setEmail(emailRegex);
    if (!regExp.test(emailRegex)) {
      setEmailMessage('Please verify your email');
    }
    else
    {
      setEmailMessage('OK :)');
      setIsEmail(true);
      setEmailBtDis(false);
    }
}

const onChangePasswordConfirm = (e) => {
  const passwordConfirmCurrent = e.target.value
  setPasswordConfirm(passwordConfirmCurrent)

  if (password === passwordConfirmCurrent) {
    setPasswordConfirmMessage('OK :)')
    setIsPasswordConfirm(true)
  } else {
    setPasswordConfirmMessage('The password is different')
    setIsPasswordConfirm(false)
  }
}

const emaildupli = () => {
  checkEmail(email);
}

  return(
  <Container>
    <Modal
      show ={show}
      onHide = {onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id = "modal-body"
    >
     <div className="Signup-header">
     Sign Up
     </div>
      <Modal.Body id="form-div">
      <Form>
      <div className="form-1">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={onChangeEmail}/>
        {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
        <button type="button" disabled={emailBtDis} onClick={emaildupli} id='btn-check'>Check</button>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={checkPassword}/>
        {password.length > 0 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{pwdMessage}</span>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={onChangePasswordConfirm}/>
        {passwordConfirm.length > 0 && <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>}
      </Form.Group>
      
      </div>

      <div className="form-2">

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nick-Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your NickName" />
        <button type="button" id='btn-check'>Check</button>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>How old are you ?</Form.Label>
        <Form.Control type="number" placeholder="age" min="10" max="100" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contury</Form.Label>
        <CountrySelector></CountrySelector>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gender</Form.Label>
        <div>
        <input type='radio' name='gender' value='female' />여성
  <input type='radio' name='gender' value='male' />남성
  </div>
      </Form.Group>

      </div>
      
     
    </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button className="cp-btn" type="submit">
        Complete
      </Button>
      <button onClick={onHide}>close</button>
      </Modal.Footer>
    </Modal>
  </Container>
  )
}

export default SignUpModal;