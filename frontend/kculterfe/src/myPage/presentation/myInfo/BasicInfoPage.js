import React, { useState, useMemo, useEffect } from 'react';
import { Form, Container } from 'react-bootstrap';
import './MyInfo.css';
import { checkEmail } from '../../container/EmailCheck';
import { checkNick } from '../../container/NickCheck';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import { EditMemberInfo } from '../../container/EditMemberInfo';
import { getMemberInfo } from '../../container/GetMemberInfo';

export default function EditBasicInfo() {
  const [email, setEmail] = useState(""); //이메일
  const [nickName, setNickName] = useState(''); //닉네임
  const [countryCode, setCountryCode] = useState('') //나라
  const [countryLabel, setCountryLabel] = useState('') //나라
  const [age, setAge] = useState('');
  const [gender,setGender] = useState('');
  const [pfImg, setPfImg] = useState('');
  const [formValue, setFormValue] = useState(''); // 폼 변경 변수

  const [memberInfo, setMemberInfo] = useState([]);

  /*오류메세지*/
  const [nickNameMessage, setnickNameMessage] = useState('');

  /*유효성 검사*/
  const [isNickName, setIsNickName] = useState(false);

    // 값이 수정되어 버튼 활성화 위해
  const [countryCodeAvail, setCountryCodeAvail] = useState(false);
  const [genderAvail, setGenderAvail] = useState(false);
  const [pfImageAvail, setPfImageAvail] = useState(false);
  const [nickNameAvail,setNickNameAvail] = useState(false);

  /*체크 버튼 disabled만들기 위해 */
  // const [emailBtDis,setEmailBtDis] = useState(true);
  const [NickNameBtDis, setNicNameBtDis] = useState(true);
  const [checkDefaultGender, setCheckDefaultGender] = useState(false);

  useEffect(() => {
    getMemberInfo()
    .then(resData => {
      // console.log('resData: ' + resData);
      setMemberInfo(resData)
      // console.log('gender: ' + resData.entries().gender);
      if (memberInfo.gender == "male") {
        setCheckDefaultGender(false);
      }
      else {
        setCheckDefaultGender(true);
      }
    })
    .catch(err => {
      console.log(err);
    })
  },[]);

  // 사진 파일 변경
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
  }

  // 닉네임 변경
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

  /* 나라선택 */
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = value => {
    setCountryLabel(value.label);
    setCountryCode(value.value);
    setCountryCodeAvail(true);
  }

  // 기본 정보 수정 버튼
  const editMember = async () => {
    var gender_ = gender;
    var countryCode_ = countryCode;

    if (!nickName){ setNickName("success"); } // 현재 와 동일하게 해야함.
    if (gender == '') {gender_ = gender; }
    if (countryCode == '') {countryCode_ = "TEST"; }
    if (!pfImg) {setPfImg(""); } // 사진 넣어야함

    const memberNumHash = window.sessionStorage.getItem("memberHash")

    const formData = {
      memberNumHash: memberNumHash,
      nickName : nickName,
      // 여기서 밑에 두 변수는 useState 변하고 값이 안들어 와서 따로 지역 변수로 선언해줌(다른 분들에게 물어봐야할 듯)
      countryCode : countryCode_,
      gender : gender_,
    }

    console.log(formData) // 잘 찍히는지 확인

    const fmd = new FormData();
    const jsonForm = JSON.stringify(formData);
    const blobForm = new Blob([jsonForm],{
        type : 'application/json'
    })

    fmd.append('formValue', blobForm);
    fmd.append('file', '');

    const result = await EditMemberInfo(fmd);
    if(result == 200){
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
          <img src={pfImg || memberInfo.pf_image} alt="profile" width="100" height="130"></img>
          <Form.Label>Profile img upload</Form.Label>
          <Form.Control accept="image/jpg, image/png, image/jpeg" onChange={onChangeProfilImg} type="file" />
        </Form.Group>

        {/* 닉네임 */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nick-Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your NickName" onChange={onChangeNickName} defaultValue={memberInfo.nickName} />
          <span className={`message ${isNickName ? 'success' : 'error'}`}>{nickNameMessage}</span>
          <button type="button" disabled={NickNameBtDis} onClick={nicknamedupli} id='btn-check'>Check</button>
        </Form.Group>

        {/* 나라 */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contury</Form.Label>
          <Select 
            options={options} 
            value={{ label: countryLabel || memberInfo.countryCode }}
            onChange={changeHandler} >
          </Select>
        </Form.Group>

        {/* 성별 */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Gender</Form.Label>
          <div className="select-gender">
            {/* checked{gender === 'female'} 이렇게 넣어주면 초기값 완성 */}
            <input type='radio' id = "select" name='gender' value='female' checked={checkDefaultGender ? false : true} onClick={(e) => { 
              setGender(e.target.value); setGenderAvail(true); setCheckDefaultGender(false)}} /> {/* checked 초기값 줄 때 추후 리팩토링의 여지가 있다. */}
            <label for ="select">여성</label>
            <input type='radio' id = "select2" name='gender' value='male' checked={checkDefaultGender ? true : false} onClick={(e) => { 
              setGender(e.target.value); setGenderAvail(true); setCheckDefaultGender(true)}}/>
            <label for="select2">남성</label>
          </div>
        </Form.Group>
      </Form>

      {/* Edit 버튼 */}
      <button className="cp-btn" 
        disabled={!(nickNameAvail||countryCodeAvail||genderAvail||pfImageAvail)} 
        onClick={editMember}>
          Edit
      </button>
    </Container>
  )
}