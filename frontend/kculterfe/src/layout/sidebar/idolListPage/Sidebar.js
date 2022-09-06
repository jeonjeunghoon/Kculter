import React from 'react';
import { Link } from 'react-router-dom';
import common from "../sidebarCommonData.json"
import { useDispatch } from "react-redux";
import { SIDE_SET_CONCERT, SIDE_SET_IDOL, SIDE_SET_ATTR } from "../../../redux/reducer";
import './sidebar.css';
import { useSelector } from 'react-redux';
import SidebarProfile from '../SidebarProfile';
import ConcertCalendar from '../calendar/ConcertCalendar';

export default function Sidebar(props) {
	const dispatch = useDispatch();
	const idolSelect = useSelector(state => state.idolSelected);
	const attrSelect = useSelector(state => state.attrSelected);
	const concertSelect = useSelector(state => state.concertSelected);

	return (
		<div className="sidebar">
			<Link to='/.'><i className="bi-chevron-left"/></Link>
			<div className='sidebarTitle'><i className={common[0].page[props.pageidx].icon}></i>{common[0].page[props.pageidx].title}</div>
			<SidebarProfile/>
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
			<div className='concert_calender'>
				{concertSelect && <ConcertCalendar/>}
			</div>
		</div>
	)
}