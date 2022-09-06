import React, { useState, useEffect } from 'react';
import BoxCardItem from './BoxCardItem';
import { getCourseList } from '../../container/GetCours';

function BoxCardList() {
	let dayNum = 1;
	// DB서버에서 course 데이터 받기.
	const [data, setData] = useState([]);

	useEffect(() => {
			getCourseList()
			.then(resData => {
				setData(resData)
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<div className="box-list">
			{ data&&data.map((course, index) => <BoxCardItem key={index} props={course} dayNum={dayNum++} {...course} />) || <div>Please add course.</div> }
		</div>
	)
}

export default BoxCardList;
