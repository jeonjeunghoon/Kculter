import React from 'react';
import Form from 'react-bootstrap/Form';

function IdolSelect(props) {

	return (
		<>
			<Form.Select aria-label="selectIdol" onChange={props.handleSelect}>
				<option value="">Select Idol</option>
				<option value="BTS">BTS</option>
				<option value="BLACKPINK">BLACKPINK</option>
				<option value="EXO">EXO</option>
			</Form.Select>
		</>
	);
}

export default IdolSelect;