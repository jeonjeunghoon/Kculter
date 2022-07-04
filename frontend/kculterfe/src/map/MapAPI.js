import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapAPI extends Component {
	render() {
		return (
			<div className='MapApi'>
				<Map
					google={this.props.google}
					zoom={15} // 화면 줌
					initialCenter={{ lat: 37.3379297, lng: 127.9269225 }} // 뚜에이오 위도 경도
				></Map>
			</div>
		);
	}
}

// const MapAPI = () => {
// 	return (
// 		<div className='MapAPI'>
// 			<Map
// 				google={this.props.google} // 뭘까
// 				zoom={15} // 화면 줌
// 				initialCenter={{ lat: 37.3379297, lng: 127.9269225 }} // 뚜에이오 위도 경도
// 			></Map>
// 		</div>
// 	);
// }

export default GoogleApiWrapper({
	apiKey: "AIzaSyACbIPocp-CLvcsG7CyYmV69q1Vp6k7vf0", // 내 API키
})(MapAPI);
