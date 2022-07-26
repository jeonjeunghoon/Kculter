<<<<<<< HEAD
import React from 'react';
import MapLink from '../map/MapLink';
import MyPageLink from '../myPage/page/MyPageLink';
import ConcertPageLink from '../concertPage/concertPageLink';
import IdolListPageLink from '../IdolListPage/IdolListPageLink';
import './MainPage.css';
import MainNavbar from '../main/MainNavbar';
import LoginPage from '../login/presentation/LoginPage';
import LoginLink from '../login/LoginLink';

function MainPage() {
    return(
        <>
            <MainNavbar/>
          
        </>
    );
}
=======
import React from 'react';
import MapLink from '../map/MapLink';
import MyPageLink from '../myPage/MyPageLink';
import ConcertPageLink from '../concertPage/concertPageLink';
import IdolListPageLink from '../IdolListPage/IdolListPageLink';
import './MainPage.css';

function MainPage() {
    return(
        <>
            <div style={{border:'1px solid black'}}>
            </div>
			<div>
				<MapLink/>
			</div>
            <div>
				<MyPageLink/>
			</div>
            <div>
				<ConcertPageLink/>
			</div>
            <div>
				<IdolListPageLink/>
			</div>
        </>
    );
}
>>>>>>> hyunho
export default MainPage;