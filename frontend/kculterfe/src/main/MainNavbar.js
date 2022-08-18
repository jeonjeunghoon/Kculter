import React, {useState } from 'react';
import {Link} from 'react-router-dom';
import './MainNavbar.css';
import { Button } from './Button';
import logo from '../src_asset/logo.png';

function MainNavbar() {
    return (
    
           <nav className='navbar'>
           <div className='navbar-container'>
               <Link to="/" className ='navbar-logo' >
                   <img src={logo}></img>
               </Link>
               <ul className='nav-menu'>
                       <li className='nav-item'>
                      <Link to='/ConcertPage' className='nav-links'>
                        CONCERT
                      </Link> 
                       </li>
                       <li className='nav-item'>
                      <Link to='/Mypage' className='nav-links'>
                      MYPAGE
                      </Link> 
                       </li>
                       <li className='nav-item' id="nav-last">
                      <Link to='/Login' className='nav-links'>
                        LOGIN
                      </Link> 
                       </li>
               </ul>
            </div>
        </nav>
    )
}

export default MainNavbar;
