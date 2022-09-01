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
	const coursePlace = useSelector(state => state.course);
	const coursePin = "";
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
				props.kculter.place &&
				props.kculter.pin &&
				<CustomMarker
					place={props.kculter.place}
					pin={props.kculter.pin}
					title={window.sessionStorage.getItem("title")}
					markerHandler={handleCustomMarker}
					setCenter={props.setCenter}
					setZoom={props.setZoom}
					dispatch={props.dispatch}
				/>
			}
			{/* 코스 마커 */}
			{
				coursePlace &&
				<CustomMarker
					place={coursePlace}
					pin={coursePin}
					title={"COURSE"}
					markerHandler={handleCustomMarker}
					setCenter={props.setCenter}
					setZoom={props.setZoom}
					dispatch={props.dispatch}
				/>
			}
			{/* Near 마커 */}
			{
				props.near ?
					props.isStay ?
					<CustomMarker
						place={nearData}
						pin={props.stayPin}
						title={"STAY"}
						markerHandler={handleCard}
						setCenter={props.setCenter}
						setZoom={props.setZoom}
						dispatch={props.dispatch}
					/>
					:
					<CustomMarker
						place={nearData}
						pin={props.tourPin}
						title={"TOUR"}
						markerHandler={handleCard}
						setCenter={props.setCenter}
						setZoom={props.setZoom}
						dispatch={props.dispatch}
					/>
				:
				<></>
			}
		</div>
	);
}

export default MapMarker;