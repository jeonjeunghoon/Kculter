import React from 'react';
import Select from 'react-select';

const customStyles = {
	option: (provided, state) => ({
	  ...provided,
	  color: state.isSelected ? 'blue' : 'black',
	}),
	control: (provided) => ({
		...provided,
		fontSize: 10,
		minWidth: 150,
		height: 10
	}),
}

const options = [
	{value: 'bts', label: 'BTS'},
	{value: 'blackpink', label: 'BLACK PINK'},
	{value: 'mcthemax', label: 'MC THE MAX'}
];

const MapSelect = () => {
	return (
		<Select
			styles={customStyles}
			placeholder={'K-POP ARTIST'}
			options={options}
		/>
	);
}

export default MapSelect;
