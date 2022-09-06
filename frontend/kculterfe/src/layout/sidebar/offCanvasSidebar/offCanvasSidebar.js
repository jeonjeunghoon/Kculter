import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import { useMediaQuery } from "react-responsive";
import { useSelector } from 'react-redux';
import MapSideNav from '../mapPage/presentation/MapSideNav';
import IdolListSideNav from '../idolListPage/Sidebar';
import MySideNav from '../myPage/Sidebar';

import idolListItem from "../idolListPage/sidebar.json";
import mapItem from "../mapPage/sidebar.json";
import myPageItem from "../myPage/sidebar.json";
import '../idolListPage/sidebar.css';
import './offCanvasSidebar.css';


function OffCanvasSidebar(props) {
	const place = useSelector(state => state.place);
	const location = useLocation();
	const isSm = useMediaQuery({
		query : "(max-width:512px)"
	});
	useEffect(() => {
		props.handleOpen(true);
	}, [place]);
	
	return (
		<>
			<Offcanvas className='custom' show={ props.isOpen && isSm } onHide={props.sideClose}>
				<div className='inCanvas'>
					{location.pathname == "/IdolListPage" && <IdolListSideNav pageidx={0} items={idolListItem}/>}
					{location.pathname == "/MapPage" && <MapSideNav pageidx={1} items={mapItem} handleOpen={props.handleOpen}/>}
					{location.pathname == "/Mypage" && <MySideNav pageidx={2} items={myPageItem}/>}
				</div>
			</Offcanvas>
		</>
	);
}

export default OffCanvasSidebar;
