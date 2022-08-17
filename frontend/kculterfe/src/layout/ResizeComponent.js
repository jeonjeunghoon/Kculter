import React, {useEffect, useState} from 'react';
import { debounce } from 'lodash';

const ResizedComponent = () => {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	})

	const handleResize = debounce(() => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight
		});
	}, 1000);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, []);
	
	return <>{console.log(window.innerWidth, window.innerHeight)}</>
}

export default ResizedComponent;