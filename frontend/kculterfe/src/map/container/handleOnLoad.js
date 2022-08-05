import axios from 'axios';

export function handleCenterChanged(mapref, setCenter) {
	if (mapref) {
		const newCenter = mapref.getCenter();
		const newPos = {
			lat: newCenter.lat(),
			lng: newCenter.lng(),
		}
		setCenter(newPos);
	}
	// axios.get('/near/stay', newPos)
  //   .then(function(res){
  //       const list = res.data;
  //       if(list == null){
  //           alert("입력된 Kpop 스타가 없습니다. \n Kpop 스타부터 입력하세요");
  //           window.location.href="/manager/kpop"
  //       }else{
  //           navigate(props.url,{ //경로는 props.url로 보내고
  //               state : { //데이터로는 
  //                   list : list //list 값 보냄
  //               }
  //           });
  //       }
  //   })
  //   .catch(function(error){
  //       console.log(error);
  //       alert("서버 통신 실패");
  //   })
};

export function handleCurrent(map, setCenter, current, setCurrent, setGeoService, setLoaded, setMapRef) {
	const locationButton = document.createElement('button');
	const google = window.google;

	locationButton.textContent = 'Pan to Current Location';
	locationButton.classList.add('custom-map-control-button');
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
	locationButton.addEventListener("click", () => {
		// Try HTML5 geolocation.
		setCurrent(true);
    if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const pos = {
						lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
					setCenter(pos);
					setGeoService(true);
					setLoaded(true);
				},
        () => {
					setGeoService(false);
					setLoaded(true);
        }
      );
    } else {
			setGeoService(false);
			setLoaded(true);
    }
  });
}

export function handleOnLoad (map, setCenter, current, setCurrent, setGeoService, setLoaded, setMapRef) {
	// 현재 위치 버튼
	handleCurrent(map, setCenter, current, setCurrent, setGeoService, setLoaded);
	setMapRef(map);
};