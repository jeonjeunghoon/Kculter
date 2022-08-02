import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './Layout.css';
import ConcertSideNav from './sidebar/concertPageSidebar/Sidebar';
import MySideNav from './sidebar/myPageSidebar/Sidebar';
import IdolListSideNav from './sidebar/idolListPageSidebar/Sidebar';
import MapSideNav from './sidebar/mapPageSidebar/Sidebar';
import Header from './Header';
// import Search from './Search';

const Layout = () => {
	const location = useLocation();
	console.log(location);
	if (location.pathname == '/ConcertPage')
		return (
			<div className='layout'>
				<ConcertSideNav />
				<Header />
				<Outlet />
			</div>
		);
	else if (location.pathname == '/Mypage')
		return (
			<div className='layout'>
				<MySideNav />
				<Header />
				<Outlet />
			</div>
		);
	else if (location.pathname == '/MapPage')
		return (
			<div className='layout'>
				<MapSideNav />
				<Header />
				<Outlet />
			</div>
		);
	else if (location.pathname == '/IdolListPage')
		return (
			<div className='layout'>
				<IdolListSideNav />
				<Header />
				<Outlet />
			</div>
		);
}

export default Layout;