import React from 'react';
import './idolListPage/sidebar.css';
import { Link } from 'react-router-dom';
import common from "./sidebarCommonData.json"

export default function SidebarProfile() {
	const nickname = window.sessionStorage.getItem("nickname");
	console.log(nickname);
	if (nickname) {
		return (
			<>
				<Link to='/Mypage' className='link-to-mypage'>
					<i className="bi-person-circle"></i>
					<div className="name">{nickname}</div>
				</Link>
			</>
		)
	}
	else {
		return (
			<>
				<Link to='/Login' className='link-to-login'>
					<i className="bi-person-circle"></i>
					<div className="name">please login</div>
				</Link>
			</>
		)
	}
}