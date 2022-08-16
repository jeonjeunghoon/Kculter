import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SidebarItem from "./SidebarItem"
import common from "./sidebarCommonData.json"
import ResizedComponent from '../ResizeComponent';
import './sidebar.css';

export default function Sidebar(props) {
	const location = useLocation();
	return (
		<div className="sidebar">
			<Link to='/'><i className="bi-chevron-left sidebar-back-btn"></i></Link>
			<div className='sidebarTitle'><i className={common[0].page[props.pageidx].icon}></i>{common[0].page[props.pageidx].title}</div>
			<Link to='/Mypage' className='link-to-mypage'>
				<i className="bi-person-circle"></i>
				<div className="name">{common[1].name}</div>
			</Link>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			{ props.items.map((item, index) => <SidebarItem key={index} item={item} {...item} />)}
		</div>
	)
}