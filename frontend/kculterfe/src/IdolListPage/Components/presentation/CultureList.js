import React, { useEffect, useState } from 'react';
import IdolCard from './IdolCard.js';
import IdolSearchBar from './IdolSearchBar';
import { getCultureList } from '../container/GetCultureListData';
import DropdownButton from 'react-bootstrap/DropdownButton';
/** css module */
import styles from './IdolList.module.css';

function CultureList({}) {
	const [search, setSearch] = useState("");
	const onChange = (e) => {
		setSearch(e.target.value)
	}

	const [data, setData] = useState([]);
	useEffect(() => {
		getCultureList()
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
				{ filterTitle.map(cultureCard => 
				<div className={styles.CardDiv}>
					<IdolCard
					keyNum={cultureCard.keyNum}
					type={2}
					title={cultureCard.name}
					path_photo={cultureCard.fileUrl}
					num_like={cultureCard.likeCount}
					num_spot={cultureCard.likeCount}
					explain={cultureCard.explain}
					/>
				</div>) }
			</div>
		</div>
	)
}

export default CultureList