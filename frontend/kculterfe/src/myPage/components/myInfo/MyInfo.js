import React, {useState,useMemo, useEffect} from 'react';
import {Form, Container} from 'react-bootstrap';
import './MyInfo.css';
// import '../presentation/CountryList';
import {checkEmail} from '../../container/EmailCheck';
import {checkNick} from '../../container/NickCheck';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import { EditInfo } from '../../container/EditInfo';
// import crypto from 'crypto-js';
import axios from 'axios';
// import {hashPwd}  from '../presentation/Encryptpwd';

function MyInfo({show, onHide}) {

  const [email, setEmail] = useState(""); //이메일
  const [password, setPassword] = useState(''); //비밀번호
  const [nickName, setNickName] = useState(''); //닉네임
  const [country,setCountry] = useState();
  const [countryCode, setCountryCode] = useState('') //나라
  const [age, setAge] = useState('');
  const [gender,setGender] = useState('');
  const [pfImg, setPfImg] = useState('');
  
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
    gender : gender,
    pf_image : pfImg
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

const onChangeProfilImg = (e) => {
  e.preventDefault();
  const imgUrl = e.target.files[0];
  var reader = new FileReader();

  reader.readAsDataURL(imgUrl);
  reader.onloadend = function(e) {
    setPfImg(e.target.result);
  }

  // if (!imgUrl) {
  //   alert("It is not collect url")
  // }
  // else {
  //   setPfImg(imgUrl);
  //   console.log(imgUrl);
  // }
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
    // setPassword(hashPwd(password));
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
    const result = await EditInfo(formData);
    if(result == 1){
      alert("success on edit");
    }else{
      alert("Edit failed");
    }
  }
}

const cancel = () => {
  onHide();
}

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("/member").then(res => console.log(res.data))
}
  return(
    <Container id="my-info">
      <Form>
        {/* 사진 업로드 */}
        <img src={pfImg} alt="profile" width="500" height="600"></img>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Profile img upload</Form.Label>
          <Form.Control onChange={onChangeProfilImg} type="file" />
        </Form.Group>

        {/* 이메일 */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" defaultValue={"hyujo@gmail.com"} onChange={onChangeEmail}/>
          <span className={`message ${emailOk ? 'success' : 'error'}`}>{verifyMessage}</span>
          <button type="button" disabled={emailBtDis} onClick={emaildupli} id='btn-check'>Check</button>
        </Form.Group>

        {/* 닉네임 */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nick-Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your NickName" onChange={onChangeNickName} defaultValue={"hyujo"} />
          <span className={`message ${isNickName ? 'success' : 'error'}`}>{nickNameMessage}</span>
          <button type="button" disabled={NickNameBtDis} onClick={nicknamedupli} id='btn-check'>Check</button>
        </Form.Group>

        {/* 나이 */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>How old are you ?</Form.Label>
          <Form.Control type="number" onChange={checkAge} placeholder="age" min="10" max="100" defaultValue={"30"} />
        </Form.Group>

        {/* 나라 */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contury</Form.Label>
          <Select 
            options={options} 
            defaultValue={{ label: "Korea", value: "country" }}
            onChange={changeHandler} >
          </Select>
        </Form.Group>

        {/* 성별 */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Gender</Form.Label>
          <div className="select-gender">
            {/* checked{gender === 'female'} 이렇게 넣어주면 초기값 완성 */}
            <input type='radio' id = "select" name='gender' value='female' onClick={(e) =>setGender(e.target.value)} /><label for ="select">여성</label>
            <input type='radio' id = "select2" name='gender' value='male' onClick={(e) =>setGender(e.target.value)}/><label for="select2">남성</label>
          </div>
        </Form.Group>
      </Form>

      {/* Edit 버튼 */}
      <button className="cp-btn" disabled={!(emailOk&&isNickName)} onClick={insertMember}>
        Edit
      </button>

      {/* 비밀번호 */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <form onSubmit={handleSubmit}>
          <Form.Control type="password" placeholder="Password" onChange={checkPassword}/>
        </form>
        <text className={`message ${isPwd ? 'success' : 'error'} display-linebreak`}>{pwdMessage}</text>
      </Form.Group>

      {/* 비밀번호 확인 */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={onChangePasswordConfirm}/>
        <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
      </Form.Group>

      {/* 비밀번호 변경 버튼으로 해야 할듯? */}
      <button className="close-btn" disabled={!(isPwd&&isPasswordConfirm)} onClick={cancel}>password confirm</button>
    </Container>
  )
}

export default MyInfo;