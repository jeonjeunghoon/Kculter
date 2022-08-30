import React, {useEffect, useState} from 'react';
import { Row } from 'react-bootstrap';
import BoxLikeItem from './BoxLikeItem';
import { getLikeList } from '../../container/GetLikeList';
import '../../styles/BoxLikeList.css';

function BoxLikeList() {
	// DB서버에서 course 데이터 받기.
	const [data, setData] = useState([]);
	useEffect(() => {
		getLikeList()
		.then(resData => {
			setData(resData)
		})
		.catch(err => {
			console.log(err);
		});
		console.log(data); // 데이터 체크
	}, []);

	return (
		<>
			<Row id="box-like-list">
				{ data.map((LikeList, index) => <BoxLikeItem key={index} props={LikeList} {...LikeList} />)}
			</Row>
		</>
	)
}

export default BoxLikeList;
