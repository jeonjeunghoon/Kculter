import React, { useEffect, useState } from 'react';
import './ConcertList.css';
import ConcertCard from './ConcertCard';
import { getConcertList } from '../container/GetConcertListData';
import ConcertSearchBar from './ConcertSearchBar';
import IdolSelect from './IdolSelect';
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
			<div className='Filter'>
				<div className="ConcertSearchBar">
					<ConcertSearchBar value={search} onChange={onChange} />
				</div>
				<div className='IdolSelect'>
					<IdolSelect/>
				</div>
			</div>
			<div className="CardContainer">
				{ filterTitle.map((concertData, index) => 
						<div className='CardDiv'
							key={index}
						>
							<ConcertCard 
							keynum = {concertData.concertNum}	// 콘서트 번호
							title = {concertData.concertName}	// 콘서트 이름
							explain = {concertData.explain}		// 콘서트 설명
							startDate = {concertData.startDate}	// 콘서트 시작일자
							endDate = {concertData.endDate}		// 콘서트 끝나는 일자
							lat = {concertData.lat}				// 위도
							lng = {concertData.lng}				// 경도
							starKey = {concertData.starKey}	// kpop key번호
							starHash = {concertData.starHash} // 스타 해쉬
							img = {concertData.imageUrl}		// 이미지 url
							starName = {concertData.starName}	// 연예인 이름
							/>
						</div>
					)}
			</div>
		</div>
	)
}

export default ConcertList;