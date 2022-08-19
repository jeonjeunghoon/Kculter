import React, {
	useEffect,
} from 'react';

function CourseInfo({ info  }) {
	useEffect(() => {
		console.log("CourseInfo component created");
	}, []);

	return (
		<div style={{
			position: 'absolute',
			display: 'flex',
			flexDirection: 'column',
			border: '3px solid black',
			zIndex: '10px',
			height: '50px',
			width: '100px',
			left: '50%',
			top: '50%'
		}}>
			<div>{info.id}</div>
			<div>{info.place}</div>
		</div>
	);
}

export default CourseInfo;