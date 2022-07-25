import React from 'react';
import SidebarItem from "./SidebarItem"
import items from "../data/sidebar.json"
import './sidebar.css';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<h1 align='center'>FILTER</h1>
			{ items.map((item, index) => <SidebarItem key={index} item={item} {...item} />)}
		</div>
	)
}