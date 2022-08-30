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
			setNearData(() => props.near.data);
		}
	}, [props.near])
	return (
		<div>
			{/* KCULTER 마커 */}
			<CustomMarker
				place={props.kPlace}
				pin={props.kPin}
				markerHandler={handleCustomMarker}
				setCenter={props.setCenter}
				setZoom={props.setZoom}
				dispatch={props.dispatch}
			/>
			{/* 코스 마커 */}
			<CustomMarker
				place={useSelector(state => state.course.courseList)}
				pin={props.coursePin}
				markerHandler={handleCustomMarker}
				setCenter={props.setCenter}
				setZoom={props.setZoom}
				dispatch={props.dispatch}
			/>
			{/* Near 마커 */}
			{
				props.near ?
					props.isStay ?
					<CustomMarker
						place={nearData}
						pin={props.stayPin}
						markerHandler={handleCard}
						setCenter={props.setCenter}
						setZoom={props.setZoom}
						dispatch={props.dispatch}
					/>
					:
					<CustomMarker
						place={nearData}
						pin={props.tourPin}
						markerHandler={handleCard}
						setCenter={props.setCenter}
						setZoom={props.setZoom}
						dispatch={props.dispatch}
					/>
				:
				<></>
			}
			{
				props.concert &&
				<CustomMarker
					place={props.concert}
					pin={props.concertPin}
					markerHandler={handleCustomMarker}
					setCenter={props.setCenter}
					setZoom={props.setZoom}
					dispatch={props.dispatch}
				/>
			}
		</div>
	);
}

export default MapMarker;