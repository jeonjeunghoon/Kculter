import React, {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import './MainNavbar.css';
import { Button } from './Button';
import logo from '../src_asset/logo.png';
import {CLEAR_MEMBER} from "../redux/reducer";

function MainNavbar() {
  const dispatch = useDispatch();
  const member = useSelector(state => state.member);
  const [status,setStatus] = useState();
  const [login,setLogin] = useState('LOGIN');

  useEffect(()=>{
    if(member != ""){
      setStatus("logout");
      setLogin("LOGOUT");
    }else{
      setStatus("login");
    }
  },[])

  const checkLogin = () => {
    if(status === "login"){ //로그인으로 보내준다.
      window.location.href="/Login";
      alert("로그인간다잇")
    }else if(status === "logout"){//로그아웃 시켜준다.
      //멤버의 값을 다지우고, 다시 로그인으로 바꿔줘야한다.
      console.log(member);
      dispatch({type:CLEAR_MEMBER,
                data: ""
          });
      alert("로그아웃 간다잇");
      setStatus("login");
      setLogin("LOGIN");
    }
  }

    return (
    
           <nav className='navbar'>
           <div className='navbar-container'>
               <Link to="/" className ='navbar-logo' >
                   <img src={logo}></img>
               </Link>
               <ul className='nav-menu'>
                       <li className='nav-item'>
                      <Link to='/Mypage' className='nav-links'>
                      MYPAGE
                      </Link> 
                       </li>
                       <li className='nav-item' id="nav-last">
                      <Link to ='' onClick={checkLogin} className='nav-links'>
                        {login}
                      </Link> 
                       </li>
               </ul>
            </div>
        </nav>
    )
}

export default MainNavbar;
