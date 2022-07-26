import React from 'react';
import SidebarItem from "./SidebarItem"
import items from "./sidebar.json"
import './sidebar.css';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<i className="bi-chevron-left"></i>
			<i className="bi-filter-circle">Filter</i>
			<i className="bi-person-circle"></i>
			
			<br></br>
			<br></br>
			{ items.map((item, index) => <SidebarItem key={index} item={item} {...item} />)}
		</div>
	)
}