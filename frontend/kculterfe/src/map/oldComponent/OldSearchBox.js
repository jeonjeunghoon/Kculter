import React, { useEffect, useCallback, useRef } from 'react';
import './MapPage.css';

function SearchBox({ map, mapApi, setLocation }) {
	// useRef는 DOM Selector 함수를 사용해 DOM을 선택한다.
	// React에서 state로만 해결할 수 없고, DOM을 반드시 직접 건드려야 할 때 사용한다.
	// useRef 객체의 .current 값은 우리가 원하는 DOM을 가르키게 된다.
	// 아래의 <input ref={input} 과 같은 형식을 사용했다. 아래에서 선언한 [변수_input]을 ref 에 넣은 것인데
	// 이런 식으로 작성하면 [변수_input]은 [DOM_input]에 접근할 수 있게 되는 것이다. 
	const input = useRef(null);
	const searchBox = useRef(null);

	// useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용한다.(최적화)
	// useCallback은 콜백의 메모이제이션된 버전을 반환한다.
	// 메모이제이션된 버전은 두 번째 인자(배열)인 의존성이 변경되었을 때에만 변경된다.
	// 이것은 불필요한 렌더링을 방지하기 위해 참조의 동일성에 의존적인 최적화된 자식 컴포넌트에 콜백을 전달할 때 유용하다.
	
	// SearchBox에 input이 들어왔을 때 실행되는 함수
	const handleOnPlacesChanged = useCallback(() => {
		const selected = searchBox.current.getPlaces();
		const { 0: place } = selected;
		
		// 없는 장소
		if (!place) {
			alert('잘못된 입력입니다.');
			return;
		}

		// 위치기반 숙소 정보를 표시하기 위한 값 설정
		const location = {
			lat: place.geometry.location.lat(),
			lng: place.geometry.location.lng()
		};
		setLocation(location);

		// 검색한 장소를 화면에 렌더링
		if (place.geometry.viewport) {
			map.fitBounds(place.geometry.viewport);
			// 아래의 코드가 없을 때 구글에서 정한 default 줌으로 표시됨
			// map.setZoom(15);
		} else {
			map.setCenter(place.geometry.location);
			map.setZoom(15);
		}
	}, [searchBox]);

	// React Component가 렌더링 될 때마다 특정 작업(Side effect)을 실행할 수 있도록 하는 Hook이다.
	// Side Effect는 component가 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과를 뜻한다.
	useEffect(() => {
		if (!searchBox.current && mapApi) {
			console.log('Search Box 연결');
			// 구글 Search Box와 연결
			searchBox.current = new mapApi.places.SearchBox(input.current);

			// places_changed는 google maps에서 제공하는 이벤트다.
			// 두 번째 파라미터는 SearchBox 값이 들어왔을 때 동작할 함수
			searchBox.current.addListener("places_changed", handleOnPlacesChanged);
		}

		// 컴포넌트가 화면에서 사라질 때 (cleanup 함수)
		return() => {
			if (mapApi) {
				console.log('Search Box 제거');
				searchBox.current = null;
				mapApi.event.clearInstanceListeners(searchBox);
			}
		};

	// 두 번째 인자는 deps로 useEffect 안에서 사용하는 상태나 props가 있다면 deps 안에 넣어야 한다. 왜냐하면 이게 규칙임
	// 만약 규칙을 어길 경우 useEffect에 등록한 함수가 실행될 때 최신 props 혹은 상태를 가르키지 않는다.
	// 또한 deps 파라미터를 생략하게 되면 컴포넌트가 리렌더링 될 때마다 호출이 된다.
	}, [mapApi, handleOnPlacesChanged]);

	return (
		<input
			className='search-box'
			ref={input}
			type='text'
			placeholder='Search !'
		/>
	);
}

export default SearchBox;