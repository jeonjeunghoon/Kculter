import axios from 'axios';

export function getNewPos(mapref, setCenter) {
	const newCenter = mapref.getCenter();
		const newPos = {
			lat: newCenter.lat(),
			lng: newCenter.lng(),
		}
		setCenter(newPos);
		return (newPos);
}

function reverseGeocode(newPos, setStayData) {
	const google = window.google;
	const geocoder = new google.maps.Geocoder();
	geocoder.geocode({'latLng': newPos}, (result, status) => {
		if (status !== google.maps.GeocoderStatus.OK) {
			alert(status);
		}
		if (status == google.maps.GeocoderStatus.OK) {
			const address = result[0].formatted_address;
			axios.get('/near/stay?lat='+newPos.lat+'&lng='+newPos.lng+'&address='+address)
			.then(function(res){
				console.log(res, '통신 완료');
				setStayData(res.data);
  		})
  		.catch(function(error){
				console.log(error, "서버 통신 실패");
  		})
		}
	});
}

export function handleDragEnd(mapref, setCenter, setStayData) {
	if (mapref) {
		reverseGeocode(getNewPos(mapref, setCenter), setStayData);
	}
};