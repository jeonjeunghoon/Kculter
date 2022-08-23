import React, { useEffect, useState } from 'react';
import {
	Outlet,
	useLocation
} from 'react-router-dom';
import './Layout.css';
import ConcertSideNav from './sidebar/concertPage/Sidebar';
import IdolListSideNav from './sidebar/idolListPage/Sidebar';
import MySideNav from './sidebar/myPage/Sidebar';

import concertItem from "./sidebar/concertPage/sidebar.json";
import idolListItem from "./sidebar/idolListPage/sidebar.json";
import mapItem from "./sidebar/mapPage/sidebar.json";
import myPageItem from "./sidebar/myPage/sidebar.json";
import Header from './header/presentation/Header';
// import Resize from './ResizeComponent';

// import Search from './Search';

import MapSideNav from './sidebar/mapPage/presentation/MapSideNav';

const Layout = () => {
	const location = useLocation();
	const [open, setOpen] = useState(true);
	const sideClose = () => setOpen(false);
	const sideOpen = () => setOpen(true);

	return (
		<div className={open ? 'layout open' : 'layout close'}>
			{location.pathname == "/ConcertPage" && <ConcertSideNav pageidx={0} items={concertItem} open={open} sideClose={sideClose}/>}
			{location.pathname == "/IdolListPage" && <IdolListSideNav pageidx={1} items={idolListItem}/>}
			{location.pathname == "/MapPage" && <MapSideNav pageidx={2} items={mapItem}/>}
			{location.pathname == "/Mypage" && <MySideNav pageidx={3} items={myPageItem}/>}
			<Header open={open} sideOpen={sideOpen}/>
			<Outlet />
		</div>
	);
}

export default Layout;