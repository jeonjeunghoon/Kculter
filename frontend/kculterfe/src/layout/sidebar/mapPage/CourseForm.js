import React, {
	useState,
} from 'react';

function CourseForm({ onCreate = (v) => console.log(v) }) {
	const [place, setPlace] = useState(null);

	const handleOnClick = (placeName) => {
		onCreate({ place: placeName });
		setPlace(null);
	}

	return (
		<button
			style={{
				backgroundColor: 'red',
				height: '50px',
				width: '50px',
			}}
			onClick={() => handleOnClick("광화문")}
		/>
	);
}

export default CourseForm;