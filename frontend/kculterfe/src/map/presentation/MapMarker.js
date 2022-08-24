import React, {
	useState,
	useEffect,
} from 'react';
import {
	useSelector
} from 'react-redux';
import {
	handleCustomMarker,
	handleCard,
} from '../container/handleOnMarker';
import CustomMarker from './CustomMarker';

function MapMarker(props) {
	const [nearData, setNearData] = useState(null);

	useEffect(() => {
		if (props.near) {
			setNearData(props.near.data);
		}
	}, [props.near])
	return (
		<div>
			{/* KCULTER 마커 */}
			<CustomMarker
				kculterPlace={props.kculterPlace}
				pin={props.pin}
				markerHandler={handleCustomMarker}
				setCenter={props.setCenter}
				setZoom={props.setZoom}
				dispatch={props.dispatch}
			/>
			{/* 코스 마커 */}
			<CustomMarker
				kculterPlace={useSelector(state => state.course)}
				pin={props.pin}
				markerHandler={handleCustomMarker}
				setCenter={props.setCenter}
				setZoom={props.setZoom}
				dispatch={props.dispatch}
			/>
			{/* Near 마커 */}
			<CustomMarker
				kculterPlace={nearData}
				pin={props.pin}
				markerHandler={handleCard}
				setCenter={props.setCenter}
				setZoom={props.setZoom}
				dispatch={props.dispatch}
			/>
		</div>
	);
}

export default MapMarker;