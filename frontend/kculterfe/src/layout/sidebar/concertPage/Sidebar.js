import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import SidebarItem from "./SidebarItem"
import common from "../sidebarCommonData.json"
import { SIDE_SET_CONCERT, SIDE_SET_IDOL, SIDE_SET_ATTR } from "../../../redux/reducer";
import './sidebar.css';
import '../../Layout.css';
import { useSelector } from 'react-redux';

export default function Sidebar(props) {
	const dispatch = useDispatch();
	const idolSelect = useSelector(state => state.idolSelected);
	const attrSelect = useSelector(state => state.attrSelected);
	const concertSelect = useSelector(state => state.concertSelected);

	return (
		<div className="sidebar">
			<div className='sidebarHideToggle'><i className="bi-chevron-left sidebar-back-btn" onClick={props.sideClose}/></div>
			<div className='sidebarTitle'><i className={common[0].page[props.pageidx].icon}></i>{common[0].page[props.pageidx].title}</div>
			<Link to='/Mypage' className='link-to-mypage'>
				<i className="bi-person-circle"></i>
				<div className="name">{common[1].name}</div>
			</Link>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<div className={idolSelect ? "sidebar-item plain select" : "sidebar-item plain"}
			 onClick={() => {dispatch({type: SIDE_SET_IDOL, data: true,}); dispatch({type: SIDE_SET_ATTR, data: false,}); dispatch({type: SIDE_SET_CONCERT, data: false,})}}>
				{ props.items[0].icon && <i className={props.items[0].icon}></i> }
				{ props.items[0].title }
			</div>
			<div className={attrSelect ? "sidebar-item plain select" : "sidebar-item plain"}
			 onClick={() => {dispatch({type: SIDE_SET_IDOL, data: false,}); dispatch({type: SIDE_SET_ATTR, data: true,}); dispatch({type: SIDE_SET_CONCERT, data: false,})}}>
				{ props.items[1].icon && <i className={props.items[1].icon}></i> }
				{ props.items[1].title }
			</div>
			<div className={concertSelect ? "sidebar-item plain select" : "sidebar-item plain"}
			 onClick={() => {dispatch({type: SIDE_SET_IDOL, data: false,}); dispatch({type: SIDE_SET_ATTR, data: false,}); dispatch({type: SIDE_SET_CONCERT, data: true,})}}>
				{ props.items[2].icon && <i className={props.items[2].icon}></i> }
				{ props.items[2].title }
			</div>
			{/* { props.items.map((item, index) => <SidebarItem key={index} item={item} isSelect={select} changeSelect={changeSelect} />)} */}
		</div>
	)
}