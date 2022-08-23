import React, {useEffect, useState} from 'react';
import { Row } from 'react-bootstrap';
import BoxLikeItem from './BoxLikeItem';
import items from '../../data/myLikeList.json'
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
		console.log(data);
	}, []);

	return (
		<>
			<Row id="box-like-list" style={{margin: '32px'}}>
				{ data.map((LikeList, index) => <BoxLikeItem key={index} props={LikeList} {...LikeList} />)}
			</Row>
		</>
	)
}

export default BoxLikeList;
