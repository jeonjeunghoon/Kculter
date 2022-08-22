import React, {
	useState,
	useEffect
} from 'react'
import {
	MarkerF
} from '@react-google-maps/api'
import { CLICK_MARKER } from '../../redux/reducer';

function CustomMarker(props) {
	const [place, setPlace] = useState(null);

	useEffect(() => {
		setPlace(props.place);
	})
	return (
		place &&
		place.map((item, index) => {
			return (
				<MarkerF
					key={index}
					title={item.name}
					// icon={props.pin.imageUrl}
  				zIndex={30}
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