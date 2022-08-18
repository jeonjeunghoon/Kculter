import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import {Modal, Button, Form, Container} from 'react-bootstrap';
import '../presentation/Signup.css';

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

  const [form, setForm] = useState({
    day: "01",
  });
  const now = new Date();
  
  let years = [];
  for (let y = now.getFullYear(); y >= 1930; y -= 1) {
    years.push(y);
  }

  let month = [];
  for (let m = 1; m <= 12; m += 1) {
    if (m < 10) {
      // 날짜가 2자리로 나타나야 했기 때문에 1자리 월에 0을 붙혀준다
      month.push("0" + m.toString());
    } else {
      month.push(m.toString());
    }
  }


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
        <Form.Label>Birth Day</Form.Label>
        <div>
        <select id="birth-year"
          value={form.year}
          onChange={(e)=>
            setForm({ ...form, year: e.target.value})
          }
        >
           <option disabled selected>
                          Birth-Year
                      </option>
          {years.map(item => (
                     
                      <option 
                        value={item} key={item}
                      >{item}</option>
          ))}
        </select>
        <select id="birth-month"
          value={form.month}
          onChange={(e)=>
          setForm({...form, month: e.target.value})
        }
        >
          <option disabled selected>Birth-Month</option>
          {month.map(item => (
              <option
                value={item} key={item}
              >{item}</option>
          ))}
        </select>
       
        </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contury</Form.Label>
        <Form.Control type="password" placeholder="Password" />
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
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  </Container>
  )
}

export default SignUpModal;