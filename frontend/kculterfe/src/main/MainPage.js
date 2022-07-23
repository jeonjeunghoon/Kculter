import React from 'react';
import MapLink from '../map/MapLink';
import MyPageLink from '../myPage/MyPageLink';
import ConcertPageLink from '../concertPage/concertPageLink';
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
        </>
    );
}
export default MainPage;