/** 이 파일은 이제 사용하지 않습니다. This file is obsolete */

import React, { useEffect, useState } from 'react';
import PlaceCard from './PlaceCard.js';
import IdolSearchBar from './IdolSearchBar';
import { getPlaceList } from './container/GetPlaceListData';
/** css module */
import styles from './IdolList.module.css';

function PlaceList({}) {
	const [search, setSearch] = useState("");
	const onChange = (e) => {
		setSearch(e.target.value)
	}
	const [data, setData] = useState([]);
	useEffect(() => {
		getPlaceList()
		.then(resData => {
			setData(resData)
		})
		.catch(err => {
			console.log(err);
		});
		console.log(data);
	}, []);
	const filterTitle = data.filter((p) => {
		return p.name.replace(" ", "").toLocaleLowerCase().includes(search.toLocaleLowerCase());
	});
	return (
		<div className={styles.ListBody}>
			<div className={styles.SearchBar}>
				<IdolSearchBar value={search} onChange={onChange} />
			</div>
			<div className={styles.CardContainer}>
				{ filterTitle.map(placecard => 
				<div className={styles.CardDiv}>
					<PlaceCard
					id={placecard.placeNum}
					key={placecard.placeNum}
					culture_type={placecard.culture}
					path_photo={placecard.fileUrl}
					title={placecard.name}
					num_like={placecard.likeCount}
					lat={placecard.lat}
					lng={placecard.lng}
					address={placecard.address}
					explain={placecard.explain}
					/>
				</div>) }
			</div>
		</div>
	)
}

export default PlaceList