import React,{useState,useRef} from 'react';
import {Link} from 'react-router-dom';
import { Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './LoginPage.css';
import GoogleLoginBtn from '../container/GoogleLoginBtn';
import loginimg from '../../src_asset/로그인배경.png';
import loginblack from '../../src_asset/loginblack.png';
import logo from '../../src_asset/logo.png';
import Loginlogo from '../presentation/Loginlogo';
import Loginbtn from '../container/Loginbtn';
import PwdLink from '../presentation/PwdLink';
import ForgotPwdModal from '../presentation/ForgotPwd';
import SignUpModal from '../presentation/SignUpModal';
import '../presentation/LoginPage.css';
import '../presentation/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { PUSH_MEMBER } from "../../redux/reducer";
import {CLEAR_MEMBER} from "../../redux/reducer";


function LoginPage(){

    const [ForgotPwd, setForgotPwd] = useState(false);
    const [SignUp, setSignUp] = useState(false);
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");

    const close = () => {
        setSignUp(false);
        window.location.reload();
    }

    const dispatch = useDispatch();

    const member = {
        memberNum : 1,
          email : 'hankgood95@naver.com',
          pwd : '1234',
          nickName : 'passcucci',
          countryCode : 'KR',
          age : 28,
          gender : 'male',
          pf_image: 'https://kculter-image.s3.ap-northeast-2.amazonaws.com/user.png'
      }
        
    const ononon = () => {
        dispatch({
            type:PUSH_MEMBER,
            data: member,
          })
    }

    const member1 = useSelector(state => state.member);

    const ononon1 = () => {
       console.log(member1);
    }

    const ononon2 = () => {
        dispatch({
            type:CLEAR_MEMBER,
            data: ""
      });
     }



    return(
       <>
        <div className='login-con'>
          <img src={loginimg} /> 
          <div className='login-top'> 
          <Loginlogo className='loginNav'/> 
          </div>
            <div className='login-div'>
                <div className='login-black'>
                    <img src={loginblack}></img>
                </div>
                <div className='inpult-nav'>
                    <Form>
                    <input className='input-css1' 
                        type='text'
                        placeholder='E-mail'
                        onChange={e => setEmail(e.target.value)}
                        autoFocus/>
                    <input className='input-css2'
                    type='password'
                    placeholder='Password'
                    onChange={e=> setPwd(e.target.value)}
                    />
                <Loginbtn type="submit" email={email} pwd={pwd}>LOGIN</Loginbtn>
                </Form>
                </div>
                <SignUpModal
                    show={SignUp} onHide={close}
                    /> 
                <div className="signup-btn" onClick={()=> setSignUp(true)}>
                    <button
                        onClick={()=> setSignUp(true)}
                    >SIGNUP</button>
                </div>
                <div className="for-pwd">
                <ForgotPwdModal
            show={ForgotPwd} onHide={()=>setForgotPwd(false)}
            />
                    <button 
                        onClick={() => setForgotPwd(true)}
                        className='pwd'
                    >Forgot your password ?</button>
                </div>
                <div>
                    or
                </div>
                <div className='google-nav'>
                  <GoogleLoginBtn/>
                </div>
                <button onClick={ononon}>여기이ㅣ</button>
                <button onClick={ononon1}>여기이ㅣ</button>
                <button onClick={ononon2}>여기이ㅣ</button>

            </div>
        </div>
        </>
    );
}
export default LoginPage;