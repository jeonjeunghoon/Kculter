import React from 'react';
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

function GoogleMap({ google, locations = [] }) {
    return (
		<Map
            google={google}
            containerStyle={{
                position: "static",
                width: "100%",
                height: "100%"
            }}
            style={{
                width: "100%",
                height: "100%"
            }}
            center={locations[0]}
            initialCenter={locations[0]}
            zoom={locations.length === 1 ? 18 : 13}
            disableDefaultUI={true}
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
  		  position={{lat: 37.3260009, lng: 127.9242271}}
		  icon={{
			url: 'https://logosandtypes.com/wp-content/uploads/2020/07/Koreaboo.svg',
			anchor: new google.maps.Point(17, 46),
			scaledSize: new google.maps.Size(37, 37)
		  }}
		/>
  		<Marker
  		  name={'이노베이션 아카데미'}
  		  position={{lat: 37.488174, lng: 127.0647651}}
		  icon={{
			url: 'https://logosandtypes.com/wp-content/uploads/2020/07/Koreaboo.svg',
			anchor: new google.maps.Point(17, 46),
			scaledSize: new google.maps.Size(37, 37)
		  }}
		  />
        </Map>
    )
};

export default GoogleApiWrapper({
		apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
})(GoogleMap);
