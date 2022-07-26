import React, {useState } from 'react';
import {Link} from 'react-router-dom';
import './MainNavbar.css';
import { Button } from './Button';

function MainNavbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick =() => setClick(!click);
    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };
    return (
    
           <nav className='navbar'>
           <div className='navbar-container'>
               <Link to="/" className ='navbar-logo' >
                   K-culter  <i className='fab fa-typo3' />
               </Link>
               <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/> 
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className='nav-item'>
                      <Link to='/ConcertPage' className='nav-links'>
                        CONCERT
                      </Link> 
                       </li>
                       <li className='nav-item'>
                      <Link to='/LoginPage' className='nav-links'>
                        LOGIN
                      </Link> 
                       </li>
                       <li className='nav-item'>
                      <Link to='/Mypage' className='nav-links'>
                        MYPAGE
                      </Link> 
                       </li>
               </ul>
               {button && <Button buttonStyle = 'btn--outline'>SIGNUP!</Button>}
            </div>
        </nav>
    )
}

export default MainNavbar;
