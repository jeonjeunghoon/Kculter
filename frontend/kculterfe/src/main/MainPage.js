import React from 'react';
import MapNav from '../map/MapNav';

function MainPage(){
    return(
        <>
            <div style={{border:'1px solid black'}}>
                <h1>여기는 메인페이지</h1>
            </div>
			<div>
				<MapNav></MapNav>
			</div>
        </>
    );
}
export default MainPage;