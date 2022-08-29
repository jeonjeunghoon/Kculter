import React, {
	useState,
	useEffect
} from 'react'
import {
	Marker
} from '@react-google-maps/api'

function CustomMarker(props) {
	const title = window.sessionStorage.getItem("title");
	const [kculterPlace, setKculterPlace] = useState(null);
	const [icon, setIcon] = useState(null);
	
	useEffect(() => {
		if (props.kculterPlace) {
		setKculterPlace(() => props.kculterPlace);
		const icon = new window.google.maps.MarkerImage(
			props.pin.imageUrl,
			null,
			null,
			null,
			new window.google.maps.Size(30, 30)
		);
		setIcon(() => icon);
		}
	}, [props.kculterPlace])
	return (
		kculterPlace &&
		kculterPlace.map((item, index) => {
			return (
				<Marker
					key={index}
					icon={icon}
					position={{
						lat: item.lat,
						lng: item.lng
					}}
					onClick={() => {
						props.markerHandler(item, props.setCenter, props.setZoom, props.dispatch, title);
					}}
				/>
			);
		})
	);
}

export default CustomMarker;