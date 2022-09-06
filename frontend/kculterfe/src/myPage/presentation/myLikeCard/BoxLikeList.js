import React, {useEffect, useState} from 'react';
import { Row } from 'react-bootstrap';
import BoxLikeItem from './BoxLikeItem';
import { getLikeList } from '../../container/GetLikeList';
import '../../styles/LikeListPage.css';

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
	}, []);

	return (
		<>
			<Row id="box-like-list">
				{ data&&data.map((LikeList, index) => <BoxLikeItem key={index} props={LikeList} {...LikeList} />) || <div>데이터가 없을 때 화면</div>}
			</Row>
		</>
	)
}

export default BoxLikeList;
