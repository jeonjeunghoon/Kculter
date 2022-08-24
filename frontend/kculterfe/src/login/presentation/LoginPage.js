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


function LoginPage(){

    const [ForgotPwd, setForgotPwd] = useState(false);
    const [SignUp, setSignUp] = useState(false);
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");

    const close = () => {
        setSignUp(false);
        window.location.reload();
    }
    
    const onKeyPress = (e) => {
        if(e.key == 'Enter' && email != ''){
            alert('a');
        }
        else{
            alert("please")
        }
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
            </div>
        </div>
        </>
    );
}
export default LoginPage;