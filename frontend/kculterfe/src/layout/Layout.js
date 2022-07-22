import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import SideNav from './SideNav';
import Header from './Header';
import Search from './Search';

const Layout = () => {
	return (
		<div className='layout'>
			<SideNav />
			<Header />
			<Search />
			<Outlet className='body'/>
		</div>
	);
}

export default Layout;