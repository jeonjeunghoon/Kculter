import React from 'react';
import {Link} from 'react-router-dom';
import './LoginPage.css';
import GoogleLoginBtn from '../container/GoogleLoginBtn';
import loginimg from '../../src_asset/로그인배경.png';
import loginblack from '../../src_asset/loginblack.png';
import logo from '../../src_asset/logo.png';
import Loginlogo from '../presentation/Loginlogo';


function LoginPage(){
    return(
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
                    <input className='input-css' 
                        placeholder='E-mail'/>
                    <input className='input-css'
                    placeholder='Password'/>
                </div>
                <div>
                  <GoogleLoginBtn/>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;