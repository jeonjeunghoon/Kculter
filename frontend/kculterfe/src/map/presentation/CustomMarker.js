import React, {
	useState,
	useEffect
} from 'react'
import {
	Marker
} from '@react-google-maps/api'
import {
	useSelector
} from 'react-redux';

function CustomMarker(props) {
	const title = useSelector(state => state.idolCulture.title);
	const [kculterPlace, setKculterPlace] = useState(null);
	const [icon, setIcon] = useState(null);
	
	useEffect(() => {
		if (props.kculterPlace) {
		setKculterPlace(props.kculterPlace);
		const tmpIcon = new window.google.maps.MarkerImage(
			props.pin.imageUrl,
			null,
			null,
			null,
			new window.google.maps.Size(30, 30)
		);
		setIcon(tmpIcon);
		}
	}, [props.kculterPlace])
	return (
		kculterPlace &&
		kculterPlace.map((item, index) => {
			return (
				<Marker
					key={index}
					title={item.name}
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