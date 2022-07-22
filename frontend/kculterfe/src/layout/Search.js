import SelectBar from './SelectBar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
	const [search, setSearch] = useState("");
	const onChange = (e) => {
		setSearch(e.target.value);
	}

	return (
		<div className='search'>
			<div className="left">
				<Link to='/'>
					<button>&lt;</button>
				</Link>
				<input // 검색창 form 알아보기
					type='text'
					value={search}
					onChange={onChange}
				/>
			</div>
			<div className="right">
				<SelectBar />
			</div>
		</div>
	);
}

export default Search;