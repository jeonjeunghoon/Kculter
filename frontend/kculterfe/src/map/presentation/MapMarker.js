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
	const course = useSelector(state => state.course.courseList)
	const [nearData, setNearData] = useState(null);

	useEffect(() => {
		if (props.near) {
			setNearData(() => props.near.data);
		}
	}, [props.near])
	return (
		<div>
			{/* KCULTER 마커 */}
			{
				props.kculter &&
				<CustomMarker
					place={props.kculter.kPlace}
					pin={props.kculter.kPin}
					markerHandler={handleCustomMarker}
					setCenter={props.setCenter}
					setZoom={props.setZoom}
					dispatch={props.dispatch}
				/>
			}
			{/* 코스 마커 */}
			<CustomMarker
				place={course}
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