import { Link } from 'react-router-dom';

const MapNav = () => {
	return (
		<div style={{border: '1px solid black'}}>
			<nav>
				<h3>MAP Link</h3>
				{/*

				리액트는 a tag를 사용하지 않는다.
				리액트 앱이 가진 상태가 초기화되고 랜더링된 컴포넌트들이 모두 날라가버린다.
				대신 Link tag를 사용한다.

				*/}
				<Link to="googleMap">Go to Map</Link>
			</nav>
		</div>
	);
}

export default MapNav;