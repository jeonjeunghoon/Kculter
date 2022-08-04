import React, {
	useEffect,
} from 'react';
import {
	useLocation,
} from 'react-router-dom';

export function updateHeader(setTitle, setImg) {
	const location = useLocation();

	useEffect(() => {
		switch (location.pathname) {
			case '/MapPage':
				setTitle('Map');
				// setImg('');
				break;
			case '/Mypage':
				setTitle('My Page');
				setImg('');
				break;
			case '/ConcertPage':
				setTitle('Concert');
				setImg('');
				break;
			default:
				setTitle('Error');
				setImg('');
		}
	}, []);
}