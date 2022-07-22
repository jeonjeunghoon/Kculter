import React from 'react';
import MapLink from '../map/MapLink';
import MyPageLink from '../myPage/MyPageLink';
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
        </>
    );
}
export default MainPage;