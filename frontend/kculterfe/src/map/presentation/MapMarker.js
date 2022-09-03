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
	return (
		<div>
			{/* KCULTER 마커 */}
			{
				props.kculter &&
				props.kculter.place &&
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
				props.course.place &&
				<CustomMarker
					place={props.course.place}
					pin={props.course.pin}
					title={"COURSE"}
					markerHandler={handleCustomMarker}
					setCenter={props.setCenter}
					setZoom={props.setZoom}
					dispatch={props.dispatch}
				/>
			}
			{/* Near 마커 */}
			{
				props.near.place ?
					props.near.isStay ?
					<CustomMarker
						place={props.near.place}
						pin={props.near.stayPin}
						title={"STAY"}
						markerHandler={handleCard}
						setCenter={props.setCenter}
						setZoom={props.setZoom}
						dispatch={props.dispatch}
					/>
					:
					<CustomMarker
						place={props.near.place}
						pin={props.near.tourPin}
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