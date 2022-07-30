import React from 'react';
import { Link } from 'react-router-dom';

import * as SetUserInfo from './SetUserInfo';
import * as TourApi from './TourApi';

function MapLink() {
	const defaultProps = {
		center: {
			lat: 37.5758772,
			lng: 126.9768121
		},
		language: null,
		region: null,
		zoom: 15,
	}
	
	// SetUserInfo.setCurPos(defaultProps.center); // 현재 위치 좌표 받아오기 (비동기 이슈 해결 X)
	// SetUserInfo.setLanguage(defaultProps); // 언어 설정 함수

	return (
		<nav style={{border: '1px solid black'}}>
			<Link
				to='MapPage'
				state={{
					center: defaultProps.center,
					language: defaultProps.language,
					region: defaultProps.region,
					zoom: defaultProps.zoom
				}}
			>
			Go to MapPage
			</Link>
		</nav>
	);
}

export default MapLink;