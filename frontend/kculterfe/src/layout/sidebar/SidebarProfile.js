import React, { useState, useEffect } from 'react';
import './SidebarProfile.css';
import { Link } from 'react-router-dom';
import { getMemberInfo } from './container/GetMemberInfo';
import { useSelector } from 'react-redux';

export default function SidebarProfile() {
	const [memberInfo, setMemberInfo] = useState([]);
	const isLogin = sessionStorage.getItem("memberHash");

	if (isLogin) {
		useEffect(() => {
			getMemberInfo()
			.then(resData => {
			setMemberInfo(resData)
			})
			.catch(err => {
			console.log(err);
			})
		},[]);
	}
	
	if (isLogin) {
		return (
			<>
				<Link to='/Mypage' className='link-to-mypage'>
					<div className='pf_img_container'>
						<img className='pf_img' src={memberInfo.pfUrl} alt="hi"></img>
					</div>
					<div className="name">{memberInfo.nickName}</div>
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