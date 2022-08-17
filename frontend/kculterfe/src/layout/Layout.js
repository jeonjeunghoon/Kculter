import React, { useEffect, useState } from 'react';
import {
	Outlet,
	useLocation
} from 'react-router-dom';
import './Layout.css';
import SideNav from './sidebar/Sidebar';
import concertItem from "./sidebar/concertPage/sidebar.json";
import idolListItem from "./sidebar/idolListPage/sidebar.json";
import mapItem from "./sidebar/mapPage/sidebar.json";
import myPageItem from "./sidebar/myPage/sidebar.json";
import Header from './header/presentation/Header';
// import Resize from './ResizeComponent';

// import Search from './Search';

import MapSideNav from './sidebar/mapPage/MapSideNav';

const Layout = () => {
	const location = useLocation();

	return (
		<div className='layout'>
			{location.pathname == "/ConcertPage" && <SideNav pageidx={0} items={concertItem}/>}
			{location.pathname == "/IdolListPage" && <SideNav pageidx={1} items={idolListItem}/>}
			{location.pathname == "/MapPage" && <MapSideNav pageidx={2} items={mapItem}/>}
			{location.pathname == "/Mypage" && <SideNav pageidx={3} items={myPageItem}/>}
			<Header />
			<Outlet />
		</div>
	);
}

export default Layout;