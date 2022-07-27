import React from 'react';
import MapLink from '../map/MapLink';
import MyPageLink from '../myPage/page/MyPageLink';
import ConcertPageLink from '../concertPage/concertPageLink';
import IdolListPageLink from '../IdolListPage/IdolListPageLink';
import './MainPage.css';
import MainNavbar from './MainNavbar';
import { Button } from './Button';

function MainPage() {
    return(
        <>
           <MainNavbar/>
           <Button/>
        </>
    );
}
export default MainPage;