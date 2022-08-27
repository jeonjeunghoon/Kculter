import React, { useEffect, useState } from 'react';
import './IdolList.css';
import IdolCard from './IdolCard.js';
import IdolSearchBar from './IdolSearchBar';
import { getKpopList } from './container/GetKpopListData';
import DropdownButton from 'react-bootstrap/DropdownButton';
/** css module */
import styles from './IdolList.module.css';

function IdolList({}) {
	const [search, setSearch] = useState("");
	const onChange = (e) => {
		setSearch(e.target.value)
	}

	const [data, setData] = useState([]);
	useEffect(() => {
		getKpopList()
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
		<div className={styles.IdolListBody}>
			<div className={styles.IdolSearchBar}>
				<IdolSearchBar value={search} onChange={onChange} />
			</div>
			<div className={styles.CardContainer}>
				{ filterTitle.map(idolcard => 
				<div className={styles.CardDiv}>
					<IdolCard
					keyNum={idolcard.keyNum}
					type={1}
					title={idolcard.name}
					path_photo={idolcard.fileUrl}
					num_like={idolcard.likeCount}
					num_spot={idolcard.likeCount}
					path_map={idolcard.path_map}
					explain={idolcard.explain}
					/>
				</div>) }
			</div>
		</div>
	)
}

export default IdolList