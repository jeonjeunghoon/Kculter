import React from 'react';
import MapLink from '../map/MapLink';

function MainPage(){
    return(
        <>
            <div style={{border:'1px solid black'}}>
                <h1>여기는 메인페이지</h1>
            </div>
			<div>
				<MapLink/>
			</div>
        </>
    );
}
export default MainPage;