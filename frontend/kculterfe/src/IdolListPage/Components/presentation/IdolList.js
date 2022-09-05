import React, { useEffect, useState } from 'react';
import IdolCard from './IdolCard.js';
import IdolSearchBar from './IdolSearchBar';
import { getKpopList } from '../container/GetKpopListData';
import { getPin } from '../container/GetPinData.js';
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
			return resData.map((e, i) => {
				getPin(1, e.keyHash)
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
		return p.name.replace(" ", "").toLocaleLowerCase().includes(search.replace(" ", "").toLocaleLowerCase());
	});

	return (
		<div className={styles.ListBody}>
			<div className={styles.SearchBar}>
				<IdolSearchBar value={search} onChange={onChange} />
			</div>
			<div className={styles.CardContainer}>
				{ filterTitle.map(idolcard => {
					return <div className={styles.CardDiv}>
						<IdolCard
						keyHash={idolcard.keyHash}
						type={1}
						title={idolcard.name.replace(/\n/g, " ")}
						path_photo={idolcard.fileUrl}
						num_spot={idolcard.spot}
						explain={idolcard.explain}
						pin={idolcard.pin}
						/>
					</div>;
				})}
			</div>
		</div>
	)
}

export default IdolList