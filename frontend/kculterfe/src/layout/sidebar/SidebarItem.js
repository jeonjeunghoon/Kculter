import { useState } from "react";

export default function SidebarItem({item}) {
	const [open, setOpen] = useState(false);
	const [select, setSelect] = useState(false);

	if (item.childrens) {
		return (
		<div className={open ? 'sidebar-item open' : "sidebar-item"}>
			<div className="sidebar-title" onClick={() => setOpen(!open)}>
				<span>
					{ item.icon && <i className={item.icon}></i> }
					{ item.title }
				</span>
				<i className="bi-chevron-down toggle-btn"></i>
			</div> 
			<div className="sidebar-content">
			{ item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
			</div>
		</div>
	)
	} else {
		return (
			<div className={select ? "sidebar-item plain select" : "sidebar-item plain"} onClick={() => setSelect(!select)}>
				{ item.icon && <i className={item.icon}></i> }
				{ item.title }
			</div>
		)
	}
}