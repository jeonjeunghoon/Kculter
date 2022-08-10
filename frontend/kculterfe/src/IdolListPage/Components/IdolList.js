import React, { useEffect, useState } from 'react';
import './IdolList.css';
import IdolCard from './IdolCard.js';
import idolcards from '../Data/idolcard.json';
import IdolSearchBar from './IdolSearchBar';

function IdolList({}) {
	const [search, setSearch] = useState("");
	const onChange = (e) => {
		setSearch(e.target.value)
	}
	const filterTitle = idolcards.filter((p) => {
		return p.title.replace(" ", "").toLocaleLowerCase().includes(search.toLocaleLowerCase())
	})
	return (
		<>
		<IdolSearchBar value={search} onChange={onChange} />
		<div className="CardContainer">
			{ filterTitle.map(idolcard => 
			<div className="CardDiv">
				<IdolCard
				id={idolcard.id}
				key={idolcard.id}
				path_photo={idolcard.path_photo}
				title={idolcard.title}
				num_like={idolcard.num_like}
				num_spot={idolcard.numspot}
				path_map={idolcard.path_map}
				/>
			</div>) }
		</div>
		</>
	)
}

export default IdolList