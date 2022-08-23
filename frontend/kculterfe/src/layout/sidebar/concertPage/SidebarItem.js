import React, { useDebugValue, useState } from "react";
import { useDispatch } from "react-redux";
// import { SIDEBAR_SELECT_CARD } from "../../../redux/reducer";

export default function SidebarItem(props) {
	// const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [select, setSelect] = useState(false);

	// dispatch({
	// 	type: SIDEBAR_SELECT_CARD,
	// 	data: open,
	// })
	if (select == true)
		props.changeSelect(false);
	// console.log(select);
	return (
		<div className={select ? "sidebar-item plain select" : "sidebar-item plain"} onClick={() => setSelect(!select)}>
			{ props.item.icon && <i className={props.item.icon}></i> }
			{ props.item.title }
		</div>
	)
}