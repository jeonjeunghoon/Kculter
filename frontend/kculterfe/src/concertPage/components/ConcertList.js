import React, { useEffect, useState } from 'react';
import './ConcertList.css';
import ConcertCard from './ConcertCard';
import { getConcertList } from '../container/GetConcertListData';
import ConcertSearchBar from './ConcertSearchBar';
import items from '../data/card.json';

function ConcertList() {
	const [search, setSearch] = useState("");
	const onChange = (e) => {
		setSearch(e.target.value)
	}

	const [data, setData] = useState([]);
	useEffect(() => {
		getConcertList()
		.then(resData => {
			setData(resData)
		})
		.catch(err => {
			console.log(err);
		});
		console.log(data);
	}, []);
	const filterTitle = data.filter((p) => {
		return p.concertName.replace(" ", "").toLocaleLowerCase().includes(search.toLocaleLowerCase());
	});

	return (
		<div className='ConcertListBody'>
			<div className="ConcertSearchBar">
				<ConcertSearchBar value={search} onChange={onChange} />
			</div>
			<div className="CardContainer">
				{ filterTitle.map(concertData => 
				<div className='CardDiv'>
					<ConcertCard 
					keynum = {concertData.concertNum}	// 콘서트 번호
					title = {concertData.concertName}	// 콘서트 이름
					explain = {concertData.explain}		// 콘서트 설명
					startDate = {concertData.startDate}	// 콘서트 시작일자
					endDate = {concertData.endDate}		// 콘서트 끝나는 일자
					lat = {concertData.lat}				// 위도
					lng = {concertData.lng}				// 경도
					startKey = {concertData.starKey}	// kpop key번호
					img = {concertData.imageUrl}		// 이미지 url
					startName = {concertData.startName}	// 연예인 이름
					/>
				</div>)}
			</div>
		</div>
	)
}

export default ConcertList;