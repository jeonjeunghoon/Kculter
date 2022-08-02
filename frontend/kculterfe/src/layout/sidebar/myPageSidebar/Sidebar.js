import React from 'react';
import { Link } from 'react-router-dom';
import SidebarItem from "../SidebarItem"
import items from "./sidebar.json"
import '../sidebar.css';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<Link to='/'><i className="bi-chevron-left sidebar-back-btn"></i></Link>
			<i className="bi-filter-circle">MyPage</i>
			<Link to='/mypage' className='link-to-mypage'>
				<i className="bi-person-circle"></i>
				<div className="name">홍길동</div>
			</Link>
			<br></br>
			<br></br>
			{ items.map((item, index) => <SidebarItem key={index} item={item} {...item} />)}
		</div>
	)
}