import React from 'react';
import './IdolSearchBar.css';
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap';

function IdolSearchBar({search, onChange}) {
	return (
		<div className="IdolSearchBarContainer">
			{/* <input type="text" placeholder="SEARCH" onChange={onChange} /> */}
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control placeholder="SEARCH" onChange={onChange} />
     			</Form.Group>
			</Form>
		
		</div>


	)
}
IdolSearchBar.propTypes = {
	search: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default IdolSearchBar;