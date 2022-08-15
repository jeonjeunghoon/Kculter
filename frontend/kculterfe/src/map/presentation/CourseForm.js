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
				position: 'absolute',
				zIndex:'5px',
				backgroundColor: 'red',
				height: '50px',
				width: '50px',
				left: '50%',
			}}
			onClick={() => handleOnClick("광화문")}
		/>
	);
}

export default CourseForm;