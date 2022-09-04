import React, {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import styles from './MainNavbar.module.css';
import { Button } from './Button';
import logo from '../src_asset/logo.png';
import {CLEAR_MEMBER} from "../redux/reducer";
import { isNull } from 'lodash';
import { NonceProvider } from 'react-select';

function MainNavbar() {
  const [status,setStatus] = useState();
  const [login,setLogin] = useState('LOGIN');
  const [mypage,setMypage] = useState(false);
  const result = sessionStorage.getItem("memberHash");
  
  useEffect(()=>{
    if(result == undefined){
      setStatus("login");     
    }else {
      setStatus("logout");
      setLogin("LOGOUT");
      setMypage(true);
    }
  },[])

  const checkLogin = () => {
    if(status === "login"){ //로그인으로 보내준다.
      window.location.href="/Login";
    }else if(status === "logout"){//로그아웃 시켜준다.
      //멤버의 값을 다지우고, 다시 로그인으로 바꿔줘야한다.
      setStatus("login");
      setLogin("LOGIN");
      setMypage(false);
      sessionStorage.removeItem("memberHash");
      sessionStorage.removeItem("memberName");
      sessionStorage.removeItem("pf_image");
      sessionStorage.removeItem("mgHash");
    }
  }

    return (
    
        <nav className={styles.navbar}>
           <div className={styles.navbarContainer}>
               <Link to="/" className ={styles.navbarLogo} >
                   <img src={logo}></img>
               </Link>
               <ul className={styles.navMenu}>
                       <li className={styles.navItem}>
                       { mypage ? <Link to="Mypage" className={styles.navLinks}>MYPAGE</Link> : null }                   
                       </li>
                       <li className={styles.navItem}>
                      <Link to ='' onClick={checkLogin} className={styles.navLinks}>
                        {login}
                      </Link> 
                       </li>
               </ul>
            </div>
        </nav>
    )
}

export default MainNavbar;
