import React, { useEffect, useState } from 'react';
import './IdolList.css';
import IdolCard from './IdolCard.js';
import IdolSearchBar from './IdolSearchBar';
import { getCultureList } from './container/GetCultureListData';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
		<div className="IdolListBody">
			<div className="IdolSearchBar">
				<IdolSearchBar value={search} onChange={onChange} />
			</div>
			<div className="CardContainer">
				{ filterTitle.map(cultureCard => 
				<div className="CardDiv">
					<IdolCard
					key={cultureCard.keyNum}
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