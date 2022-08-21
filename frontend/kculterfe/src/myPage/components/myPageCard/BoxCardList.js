import React, { useState, useEffect } from 'react';
import BoxCardItem from './BoxCardItem';
import items from '../../data/myPage.json';
import { getCourseList } from '../../container/GetCours';

function BoxCardList() {
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
		console.log(data);
	}, []);

	return (
		<div className="boxList">
			{ data.map((course, index) => <BoxCardItem key={index} props={course} {...course} />)}
		</div>
	)
}

export default BoxCardList;
