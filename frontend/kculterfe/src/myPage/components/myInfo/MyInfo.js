import React, { useState, useMemo, useEffect } from 'react';
import { Form, Container } from 'react-bootstrap';
import './MyInfo.css';
import { checkEmail } from '../../container/EmailCheck';
import { checkNick } from '../../container/NickCheck';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import { EditInfo } from '../../container/EditInfo';
// import crypto from 'crypto-js';
import axios from 'axios';
import { ChangeNewPwd } from '../../container/ChangeNewPwd';
import { hashPwd }  from '../../container/Encryptpwd';

function EditBasicInfo() {
  const [email, setEmail] = useState(""); //이메일
  const [nickName, setNickName] = useState(''); //닉네임
  const [country,setCountry] = useState();
  const [countryCode, setCountryCode] = useState('') //나라
  const [age, setAge] = useState('');
  const [gender,setGender] = useState('');
  const [pfImg, setPfImg] = useState('');

  /*오류메세지*/
  const [verifyMessage, setVerMessage] = useState('');
  const [nickNameMessage, setnickNameMessage] = useState('');

  /*유효성 검사*/
  const [emailOk, setEmailOk] = useState(false);
  const [isNickName, setIsNickName] = useState(false);

    // 값이 수정되어 버튼 활성화 위해
  const [countryCodeAvail, setCountryCodeAvail] = useState(false);
  const [ageAvail, setageAvail] = useState(false);
  const [genderAvail, setGenderAvail] = useState(false);
  const [pfImageAvail, setPfImageAvail] = useState(false);
  const [emailAvail,setEmailAvail] = useState(false);
  const [nickNameAvail,setNickNameAvail] = useState(false);

  /*체크 버튼 disabled만들기 위해 */
  const [emailBtDis,setEmailBtDis] = useState(true);
  const [NickNameBtDis, setNicNameBtDis] = useState(true);

  const formData = {
    email : email,
    nickName : nickName,
    countryCode : countryCode,
    age : age,
    gender : gender,
    pf_image : pfImg
  }

  const onChangeProfilImg = (e) => {
    e.preventDefault();
    const imgUrl = e.target.files[0];
    var reader = new FileReader();

    if (imgUrl == null) {
      setPfImageAvail(false);
      setPfImg("");
      return 0;
    }
    reader.readAsDataURL(imgUrl);
    reader.onloadend = function(e) {
      setPfImageAvail(true);
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

  // 이메일 중복 검사
  const emaildupli = async () => {
    if (email == "hyujo@gmail.com") { // 현재와 같은 이메일 일시
      alert("This same email is available.")
      setEmailAvail(true)
      return ;
    }
    const result = await checkEmail(email);
    if(result > 0){
      alert("This email is not available.")
      setEmailAvail(false);
    }else{
      alert("This email is available.")
      setEmailAvail(true);
    }
  }

  //닉네임 중복검사
  const nicknamedupli = async () => {
    if (nickName == "hyujo") {
      alert("This same nick name is available.");
      setNickNameAvail(true);
      return ;
    }
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
    setageAvail(true);
    setAge(result);
  }

  /* 나라선택 */
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = value => {
    console.log("country code : "+value.value);
    setCountry(value);
    setCountryCode(value.value);
    setCountryCodeAvail(true);
  }

  const editMember = async () => {
    if (!emailAvail){ setEmail("hyujo@gmail.com"); } // 원래 이메일 또는 빈 이메일(빈 이메일 넣으면 put 할 때 통신하지 말아야함. 
    if (!nickNameAvail){ setNickName("hyujo"); } // 현재 와 동일하게 해야함.
    if (!ageAvail) { setAge("30"); }
    if (!genderAvail) {setGender("male"); }
    if (!countryCodeAvail) {setCountryCode("Korea"); }
    if (!pfImageAvail) {setPfImg(""); } // 사진 넣어야함
    
    const result = await EditInfo(formData);
    if(result == 1){
      alert("Success on edit");
    }
    else{
      alert("Edit failed");
    }
  }

  return (
    <Container id="my-info">
      <Form>
        {/* 사진 업로드 */}
        <Form.Group controlId="formFile" className="mb-3">
          <img src={pfImg} alt="profile" width="100" height="130"></img>
          <Form.Label>Profile img upload</Form.Label>
          <Form.Control accept="image/jpg, image/png, image/jpeg" onChange={onChangeProfilImg} type="file" />
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
            <input type='radio' id = "select" name='gender' value='female' onClick={(e) => { 
              setGender(e.target.value); setageAvail(true) }} />
            <label for ="select">여성</label>
            <input type='radio' id = "select2" name='gender' value='male' onClick={(e) => { 
              setGender(e.target.value); setageAvail(true) }}/>
            <label for="select2">남성</label>
          </div>
        </Form.Group>
      </Form>

      {/* Edit 버튼 */}
      <button className="cp-btn" 
        disabled={!(emailAvail||nickNameAvail||ageAvail||countryCodeAvail||genderAvail||pfImageAvail)} 
        onClick={editMember}>
          Edit
      </button>
    </Container>
  )
}

function EditPwdInfo() {
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

function MyInfo() {
  // 기본정보 와 중요한 정보 페이지 렌더링
  const [viewMyMap, setLikeList] = useState(true)
  const [btnPageColor, setBtnPageColor] = useState('blue')
  const [btnLikeColor, setBtnLikeColor] = useState('gray')

  return(
      <div id='my-body'>
          {/* 저장한 경로와 좋아요 리스트 선택 경로 네비 */}
          <div className="body-navbar">
              <button onClick={() => {setLikeList(true); setBtnLikeColor('gray'); setBtnPageColor('blue')}
              } style={{ color:btnPageColor }}>Basic Info</button>
              <button onClick={() => {setLikeList(false); setBtnLikeColor('blue'); setBtnPageColor('gray')}
              } style={{ color:btnLikeColor }}>Security</button>
          </div>
          {/* 저장한 경로 리스트 */}
          { viewMyMap ? <EditBasicInfo/> : <EditPwdInfo/> }
      </div>

  )
}

export default MyInfo;