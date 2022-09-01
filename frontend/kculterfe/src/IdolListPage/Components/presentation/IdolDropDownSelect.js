import React, {setState} from 'react';
import Form from 'react-bootstrap/Form';

function IdolDropDownSelect({data, value, onChange}) {


	return (
		<>
			<Form.Select 
			aria-label="Default select example" 
			value={value}
			onChange={onChange} 
			>
				<option>All</option>
				{
					data.map((item) => (
					<option value={item.name} key={item.name}>
						{item.name}
					</option>
				))}
				<option value="BTS">BTS</option>
				<option value="BLACKPINK">BLACKPINK</option>
				<option value="EXO">EXO</option>
			</Form.Select>
		</>
	);
}

export default IdolDropDownSelect;