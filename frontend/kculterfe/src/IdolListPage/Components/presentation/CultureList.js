import React, { useEffect, useState } from 'react';
import IdolCard from './IdolCard.js';
import IdolSearchBar from './IdolSearchBar';
import { getCultureList } from '../container/GetCultureListData';
import { getPin } from '../container/GetPinData.js';
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
			return resData.map((e, i) => {
				getPin(2, e.keyHash)
				.then(resPin => {
					let temp = {
						...e,
						"key": i,
						"pin": resPin,
					};
					setData(prevState => [
					...prevState,
					temp
					]);
					console.log(i + "th" + e);
					console.log("loaded");
				})
				.catch(err => {
					console.log(err)
				})
			})
		})
		.catch(err => {
			console.log(err)
		})
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
					keyHash={cultureCard.keyHash}
					type={2}
					title={cultureCard.name.replace(/\n/g, " ")}
					path_photo={cultureCard.fileUrl}
					num_spot={cultureCard.spot}
					explain={cultureCard.explain}
					/>
				</div>) }
			</div>
		</div>
	)
}

export default CultureList