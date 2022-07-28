import React, { useState } from 'react';
import SelectBar from './SelectBar';
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
				<input
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