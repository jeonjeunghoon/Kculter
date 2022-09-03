import React,{useState} from 'react';
import MyPageLink from '../myPage/page/MyPageLink';
import ConcertPageLink from '../concertPage/concertPageLink';
import IdolListPageLink from '../IdolListPage/IdolListPageLink';
import './MainPage.css';
import mainimg from '../src_asset/메인홈.png'
import MainNavbar from './MainNavbar';
import { Button } from './Button';
import {Link} from 'react-router-dom';

function MainPage() {

    const [login,setlogin] = useState(false);

    return(
        <div className='main-con'>
          
            <div className='maindiv'> 
              <MainNavbar className='MainNav'/>
              </div>
            <div className='mainbtn-2'>
                <Link to="Aboutus">About Us </Link>
            </div>
        <div className='mainbtn'>
           <Button/>
           </div>
        </div>
    );
}
export default MainPage;