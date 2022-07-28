import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../src_asset/logo.png';
import '../presentation/LoginPage.css';


function Loginlogo() {
  return (
  
         <nav className='login-navbar'>
             <Link to="/" className ='login-logo' >
                 <img src={logo}></img>
             </Link>
      </nav>
  )
}

export default Loginlogo;
