import React from 'react';
import MapLink from '../map/MapLink';
import MyPageLink from '../myPage/MyPageLink';
import ConcertPageLink from '../concertPage/concertPageLink';
import './MainPage.css';
import MainNavbar from '../main/MainNavbar';
import LoginPage from '../login/LoginPage';
import LoginLink from '../login/LoginLink';

function MainPage() {
    return(
        <>
            <MainNavbar/>
            <div>
                <LoginLink/>
                </div>
            <div>
				<MyPageLink/>
			</div>
            <div>
				<ConcertPageLink/>
			</div>
        </>
    );
}
export default MainPage;