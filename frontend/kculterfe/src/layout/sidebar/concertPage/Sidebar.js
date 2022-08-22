import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { useDispatch } from "react-redux";
import SidebarItem from "./SidebarItem"
import common from "../sidebarCommonData.json"
// import { SIDE_SET_CONCERT, SIDE_SET_IDOL, SIDE_SET_ATTR } from "../../../redux/reducer";
import './sidebar.css';
import '../../Layout.css';

function changeSelect(selected, setidolSelect, setattrSelect, setconcertSelect) {
	// const dispatch = useDispatch();
	if (selected == "idolSelect") {
		// dispatch({
		// 	type: SIDE_SET_IDOL,
		// 	data: true,
		// })
		setidolSelect(true);
		setattrSelect(false);
		setconcertSelect(false);
	} else if (selected == "attrSelect") {
		setidolSelect(false);
		setattrSelect(true);
		setconcertSelect(false);
	} else if (selected == "concertSelect") {
		setidolSelect(false);
		setattrSelect(false);
		setconcertSelect(true);
	}
}

export default function Sidebar(props) {
	const location = useLocation();
	const [idolSelect, setidolSelect] = useState(true);
	const [attrSelect, setattrSelect] = useState(false);
	const [concertSelect, setconcertSelect] = useState(false);

	
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
			<div className={idolSelect ? "sidebar-item plain select" : "sidebar-item plain"} onClick={() => changeSelect("idolSelect", setidolSelect, setattrSelect, setconcertSelect)}>
				{ props.items[0].icon && <i className={props.items[0].icon}></i> }
				{ props.items[0].title }
			</div>
			<div className={attrSelect ? "sidebar-item plain select" : "sidebar-item plain"} onClick={() => changeSelect("attrSelect", setidolSelect, setattrSelect, setconcertSelect)}>
				{ props.items[1].icon && <i className={props.items[1].icon}></i> }
				{ props.items[1].title }
			</div>
			<div className={concertSelect ? "sidebar-item plain select" : "sidebar-item plain"} onClick={() => changeSelect("concertSelect", setidolSelect, setattrSelect, setconcertSelect)}>
				{ props.items[2].icon && <i className={props.items[2].icon}></i> }
				{ props.items[2].title }
			</div>
			{/* { props.items.map((item, index) => <SidebarItem key={index} item={item} isSelect={select} changeSelect={changeSelect} />)} */}
		</div>
	)
}