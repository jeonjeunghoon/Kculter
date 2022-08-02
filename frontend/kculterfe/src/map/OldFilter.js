import React from 'react';
import Select from 'react-select';

import './MapPage.css';

const customStyles = {
	option: (provided, state) => ({
	  ...provided,
	  color: state.isSelected ? 'blue' : 'black',
	}),
	control: (provided) => ({
		...provided,
		fontSize: 10,
		minWidth: 150,
		minHeight: 20,
		height: 20,
	}),
	valueContainer: (provided, state) => ({
		...provided,
		height: 20,
		padding: '0 6px',
	}),
	input: (provided, state) => ({
		...provided,
		margin: -10,
	}),
	indicatorSeparator: state => ({
		display: 'none',
	}),
	indicatorsContainer: (provided, state) => ({
		...provided,
		height: 20,
	}),
}

const options = [
	{value: 'bts', label: 'BTS'},
	{value: 'blackpink', label: 'BLACK PINK'},
	{value: 'mcthemax', label: 'MC THE MAX'}
];

function Filter() {
	return (
		<Select className='filter'
			styles={customStyles}
			placeholder={'K-POP ARTIST'}
			options={options}
		/>
	);
}

export default Filter;