import React, { useState, useEffect } from 'react';
import BoxCardItem from './BoxCardItem';
import { getCourseList } from '../../container/GetCours';

function BoxCardList() {
	// DB서버에서 course 데이터 받기.
	const [data, setData] = useState([]);
	const [isEmpty, setIsEmpty] = useState(false);
	
	useEffect(() => {
		getCourseList()
		.then(resData => {
			setData(resData)
		})
		.catch(err => {
			console.log(err);
		});
		if (!data) {
			console.log("hi")
			setIsEmpty(true);
		}
	}, []);

	return (
		<div className="box-list">
			{ data&&data.map((course, index) => <BoxCardItem key={index} props={course} {...course} />) || <div>여기에 코스를 추가하라는 메시지를 넣어야 한다.</div> }
		</div>
	)
}

export default BoxCardList;
