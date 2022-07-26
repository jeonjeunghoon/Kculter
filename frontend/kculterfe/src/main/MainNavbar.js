import React, {useState } from 'react';
import {Link} from 'react-router-dom';

function MainNavbar() {
    const [click, setClick] = useState(false);

    const handleClick =() => setClick(!click);
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
                      <Link to='/' className='nav-links'>
                        HOME
                      </Link> 
                       </li>
                       <li className='nav-item'>
                      <Link to='/' className='nav-links'>
                        CONCERT
                      </Link> 
                       </li>
                       <li className='nav-item'>
                      <Link to='/' className='nav-links'>
                        Login
                      </Link> 
                       </li>
                       <li className='nav-item'>
                      <Link to='/' className='nav-links'>
                        MYPAGE
                      </Link> 
                       </li>
               </ul>
            </div>
        </nav>
    )
}

export default MainNavbar;
