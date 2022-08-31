import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import common from "../sidebarCommonData.json"
import { SIDE_SET_DASHBOARD, SIDE_SET_SETTING } from "../../../redux/reducer";
import './sidebar.css';
import SidebarProfile from '../SidebarProfile';
import { useSelector } from 'react-redux';

export default function Sidebar(props) {
	const dispatch = useDispatch();
	const dashboardSelect = useSelector(state => state.dashboardSelected);
	const settingSelect = useSelector(state => state.settingSelected);

	return (
		<div className="sidebar">
			<Link to='/.'><i className="bi-chevron-left"/></Link>
			<div className='sidebarTitle'><i className={common[0].page[props.pageidx].icon}></i>{common[0].page[props.pageidx].title}</div>
			<SidebarProfile/>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<div className={dashboardSelect ? "sidebar-item plain select" : "sidebar-item plain"}
			 onClick={() => {dispatch({type: SIDE_SET_DASHBOARD, data: true,}); dispatch({type: SIDE_SET_SETTING, data: false,});}}>
				{ props.items[0].icon && <i className={props.items[0].icon}></i> }
				{ props.items[0].title }
			</div>
			<div className={settingSelect ? "sidebar-item plain select" : "sidebar-item plain"}
			 onClick={() => {dispatch({type: SIDE_SET_DASHBOARD, data: false,}); dispatch({type: SIDE_SET_SETTING, data: true,});}}>
				{ props.items[1].icon && <i className={props.items[1].icon}></i> }
				{ props.items[1].title }
			</div>
		</div>
	)
}