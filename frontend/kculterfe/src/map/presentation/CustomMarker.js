import React, {
	useState,
	useEffect
} from 'react'
import {
	Marker
} from '@react-google-maps/api'
import { CLICK_MARKER } from '../../redux/reducer';

function CustomMarker(props) {
	const [place, setPlace] = useState(null);
	const iconMarker = new window.google.maps.MarkerImage(
		props.pin.imageUrl,
		null,
		null,
		null,
		new window.google.maps.Size(40, 40)
	);

	useEffect(() => {
		setPlace(props.place);
	})
	return (
		place &&
		place.map((item, index) => {
			return (
				<Marker className="map-marker"
					key={index}
					title={item.name}
					icon={iconMarker}
					position={{
						lat: item.lat,
						lng: item.lng
					}}
					onClick={() => {
						props.dispatch({
							type: CLICK_MARKER,
							data: item
						})
						props.setCenter({
							lat: item.lat,
							lng: item.lng
						})
						props.setZoom(15)
					}}
				/>
			);
		})
	);
}

export default CustomMarker;