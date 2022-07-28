import React from 'react';
import MapLink from '../map/MapLink';
import MyPageLink from '../myPage/page/MyPageLink';
import ConcertPageLink from '../concertPage/concertPageLink';
import IdolListPageLink from '../IdolListPage/IdolListPageLink';
import './MainPage.css';
import mainimg from '../src_asset/메인홈.png'
import MainNavbar from './MainNavbar';
import { Button } from './Button';

function MainPage() {
    return(
        <div className='main-con'>
          <img src={mainimg} />
            <div className='maindiv'> 
              <MainNavbar className='MainNav'/>
              </div>
        <div className='mainbtn'>
           <Button/>
           </div>
        </div>
    );
}
export default MainPage;