import React, { useEffect, useCallback, useRef } from 'react';

const SearchBox = ({mapApi}) => {
	// useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 '상자'다.
	// useRef는 특정 DOM을 선택해야 하는 상황에서 DOM Selector 함수를 사용해 DOM을 선택한다.
	// useRef 객체의 .current 값은 우리가 원하는 DOM을 가르키게 된다.
	const input = useRef(null);
	const searchBox = useRef(null);

	// useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용한다.(최적화)
	// useCallback은 콜백의 메모이제이션된 버전을 반환한다.
	// 메모이제이션된 버전은 두 번째 인자(배열)인 의존성이 변경되었을 때에만 변경된다.
	// 이것은 불필요한 렌더링을 방지하기 위해 참조의 동일성에 의존적인 최적화된 자식 컴포넌트에 콜백을 전달할 때 유용하다.
	// 아래의 함수는 장소를 검색했을 때 해당 장소의 위도 경도 값을 얻는다.
	const handleOnPlacesChanged = useCallback(() => {
		console.log(searchBox.current.getPlaces());
		const places = searchBox.current.getPlaces();
		if (places) {
			// 잘못된 인풋이 들어와서 오류 발생할 때 아래 로그를 주석 처리하면 된다.
			console.log(
				places[0].geometry.location.lat(),
				places[0].geometry.location.lng()
			);
		}
	}, [searchBox]);

	// React Component가 렌더링 될 때마다 특정 작업(Side effect)을 실행할 수 있도록 하는 Hook이다.
	// Side Effect는 component가 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과를 뜻한다.
	useEffect(() => {
		if (!searchBox.current && mapApi) {
			console.log('컴포넌트 생성');
			searchBox.current = new mapApi.places.SearchBox(input.current);
			searchBox.current.addListener("places_changed", handleOnPlacesChanged);
		}

		// 컴포넌트가 화면에서 사라질 때 (cleanup 함수)
		return() => {
			if (mapApi) {
				console.log('컴포넌트 제거');
				searchBox.current = null;
				mapApi.event.clearInstanceListeners(searchBox);
			}
		};
	}, [mapApi, handleOnPlacesChanged]);
	// 두 번째 인자는 deps로 useEffect 안에서 사용하는 상태나 props가 있다면 deps 안에 넣어야 한다. 왜냐하면 이게 규칙임
	// 만약 규칙을 어길 경우 useEffect에 등록한 함수가 실행될 때 최신 props 혹은 상태를 가르키지 않는다.
	// 또한 deps 파라미터를 생략하게 되면 컴포넌트가 리렌더링 될 때마다 호출이 된다.

	return (
		<input
			ref={input}
			type="text"
			placeholder='Search Box'
		/>
	);
}

export default SearchBox;