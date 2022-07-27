import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import SideNav from './sidebar/Sidebar';
import Header from './Header';
// import Search from './Search';

const Layout = () => {
	return (
		<div className='layout'>
			<SideNav />
			<Header />
			<Outlet />
		</div>
	);
}

export default Layout;