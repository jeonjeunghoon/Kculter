import React, { useState } from "react";

export default function SidebarItem(props) {
	const [open, setOpen] = useState(false);
	const [select, setSelect] = useState(false);

	if (select == true)
		props.changeSelect(false);
	console.log(select);
	return (
		<div className={select ? "sidebar-item plain select" : "sidebar-item plain"} onClick={() => setSelect(!select)}>
			{ props.item.icon && <i className={props.item.icon}></i> }
			{ props.item.title }
		</div>
	)
}