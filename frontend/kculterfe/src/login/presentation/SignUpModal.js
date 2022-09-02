import React, {useState,useMemo, useEffect} from 'react';
import {Modal, Button, Form, Container} from 'react-bootstrap';
import '../presentation/Signup.css';
import '../presentation/CountryList';
import {checkEmail} from '../container/EmailCheck';
import {checkNick} from '../container/NickCheck';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import { storeMember } from '../container/StoreMember';
import crypto from 'crypto-js';
import axios from 'axios';
import {hashPwd}  from '../presentation/Encryptpwd';

function SignUpModal({show, onHide}) {

  const [email, setEmail] = useState(""); //이메일
  const [password, setPassword] = useState(''); //비밀번호
  const [nickName, setNickName] = useState(''); //닉네임
  const [country,setCountry] = useState();
  const [countryCode, setCountryCode] = useState('') //나라
  const [age, setAge] = useState('');
  const [gender,setGender] = useState();
  
  /*오류메세지*/
  const [verifyMessage, setVerMessage] = useState('');
  const [pwdMessage, setPwdMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')
  const [nickNameMessage, setnickNameMessage] = useState('')
  
  /*유효성 검사*/
  const [emailOk, setEmailOk] = useState(false);
  const [isPwd, setIsPwd] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
  const [isNickName, setIsNickName] = useState(false);
  const [emailAvail,setEmailAvail] = useState(false);
  const [nickNameAvail,setNickNameAvail] = useState(false);

  /*버튼 disabled만들기 위해 */
  const [emailBtDis,setEmailBtDis] = useState(true);
  const [NickNameBtDis, setNicNameBtDis] = useState(true);

  const formData = {
    email : email,
    pwd : password, //여기를 암호화 한 값을 넣어야 한다. 
    nickName : nickName,
    countryCode : countryCode,
    age : age,
    gender : gender
  }



const checkPassword = (e) => {
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
      setPassword(pwdRegex);
      setPwdMessage('OK :)');
      setIsPwd(true);
    }
}

const onChangeEmail = (e) => {
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    const emailRegex = e.target.value;
    if(emailRegex === ""){
      setEmailBtDis(true);
      setVerMessage('');
      setEmailOk(false);
    }
    else if (!regExp.test(emailRegex)) {
      setEmailBtDis(true);
      setVerMessage('Please verify your email');
      setEmailOk(false);
    }
    else
    {
      setVerMessage('OK :)');
      setEmailOk(true);
      setEmailBtDis(false);
      setEmail(emailRegex);
    }
}

const onChangePasswordConfirm = (e) => {
  const passwordConfirmCurrent = e.target.value
  if(passwordConfirmCurrent === ""){
    setPasswordConfirmMessage('')
    setIsPasswordConfirm(false)
  }
  else if (password === passwordConfirmCurrent) {
    setPasswordConfirmMessage('OK :)');
    setIsPasswordConfirm(true);
  }else{
    setPasswordConfirmMessage('The password is different')
    setIsPasswordConfirm(false)    
  }
}

const onChangeNickName = (e) => {
  let regExp = /[^a-zA-Z]/g
  const nickNameRegex = e.target.value;
  if(nickNameRegex === ""){
    setnickNameMessage("");
    setNicNameBtDis(true);
    setIsNickName(false);
  }
  else if (regExp.test(nickNameRegex)){
    setnickNameMessage("no only char plz");
    setNicNameBtDis(true);
    setIsNickName(false);
  }
  else
  {
     setNickName(nickNameRegex);
     setnickNameMessage("OK :)")
     setIsNickName(true);
     setNicNameBtDis(false);
  }
}

const emaildupli = async () => { //이메일 중복검사
  const result = await checkEmail(email);
  if(result > 0){
    alert("This email is not available.")
    setEmailAvail(false);
  }else{
    alert("This email is available.")
    setEmailAvail(true);
  }
}

const nicknamedupli = async () => { //닉네임 중복검사
  const result = await checkNick(nickName);
  if(result > 0){
    alert("This nick name is not available.");
    setNickNameAvail(false);
  }else{
    alert("This nick name is available.");
    setNickNameAvail(true);
  }
}

const checkAge = (e) => {
  const result = e.target.value
  setAge(result);
}

/* 나라선택 */
const options = useMemo(() => countryList().getData(), []);

const changeHandler = value => {
  console.log("country code : "+value.value);
  setCountry(value);
  setCountryCode(value.value);
}

const insertMember = async () =>{
  if(!(emailAvail||nickNameAvail)){
    alert("Please check email and nickname duplication");
  }else if(!emailAvail){
    alert("Please check email duplication");
  }else if(!nickNameAvail){
    alert("Please check nickname duplication");
  }else{
    const result = await storeMember(formData);
    if(result == 200){
      alert("success on signup");
      cancel();
    }else{
      alert("Registration failed.\nContact us at hankgood958@gmail.com");
      cancel();
    }
  }
}

const cancel = () => {
  onHide();
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
      <div className="Signup-headers">
        Sign Up
      </div>
      <Modal.Body id="loginform-div">
        <Form>
          <div className="form-1">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={onChangeEmail}/>
              <span className={`message ${emailOk ? 'success' : 'error'}`}>{verifyMessage}</span>
              <button type="button" disabled={emailBtDis} onClick={emaildupli} id='btn-check'>Check</button>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={checkPassword}/>
              <text className={`message ${isPwd ? 'success' : 'error'} display-linebreak`}>{pwdMessage}</text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={onChangePasswordConfirm}/>
              <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
            </Form.Group>
        
          </div>

          <div className="form-2">

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nick-Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your NickName" onChange={onChangeNickName} />
              <span className={`message ${isNickName ? 'success' : 'error'}`}>{nickNameMessage}</span>
              <button type="button" disabled={NickNameBtDis} onClick={nicknamedupli} id='btn-check'>Check</button>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>How old are you ?</Form.Label>
              <Form.Control type="number" onChange={checkAge} placeholder="age" min="10" max="100" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contury</Form.Label>
              <Select options={options} value={country} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Gender</Form.Label>
              <div className="select-gender">
                <input type='radio' id = "select"name='gender' value='female' onClick={(e) =>setGender(e.target.value)} /><label for ="select">Female</label>
                <input type='radio' id = "select2"name='gender' value='male' onClick={(e) =>setGender(e.target.value)}/><label for="select2">Male</label>
              </div>
            </Form.Group>

          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="cp-btn" disabled={!(emailOk&&isPwd&&isPasswordConfirm&&isNickName)} onClick={insertMember}>
          Complete
        </button>
        <button className="close-btn"onClick={cancel}>Close</button>
      </Modal.Footer>
    </Modal>
  </Container>
  )
}

export default SignUpModal;