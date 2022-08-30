import React, { useState, useEffect } from 'react';
import BoxCardItem from './BoxCardItem';
import { getCourseList } from '../../container/GetCours';

function BoxCardList() {
	// DB서버에서 course 데이터 받기.
	const [data, setData] = useState([]);

	// promise 데이터 한번더 .then 으로 받아와 사용 / 추후 리팩토링 가능성 있음
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
			{ data.map((course, index) => <BoxCardItem key={index} props={course} {...course} />)}
		</div>
	)
}

export default BoxCardList;
