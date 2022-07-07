import React, {Component} from 'react';
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

const style = {
	width: '100%',
	height: '100%'
  }

const google = window.google

class GoogleMap extends Component {
	render() {
		return (
				<Map
					google={this.props.google}
					zoom={15}
					style={style}
					initialCenter={{
						lat: 37.3379297,
						lng: 127.9269225
					}}
					>
					<Marker 
					  name={'내 위치'}
					  icon={{
						url: 'https://logosandtypes.com/wp-content/uploads/2020/07/Koreaboo.svg',
						anchor: new google.maps.Point(17, 46),
        				scaledSize: new google.maps.Size(37, 37)
					  }}/>
					<Marker
  					  title={'The marker`s title will appear as a tooltip.'}
  					  name={'원주삼육고등학교'}
  					  position={{lat: 37.3260009, lng: 127.9242271}} />
  					<Marker
  					  name={'이노베이션 아카데미'}
  					  position={{lat: 37.488174, lng: 127.0647651}} />
				</Map>
		);
	}
}

export default GoogleApiWrapper({
		apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
})(GoogleMap);

