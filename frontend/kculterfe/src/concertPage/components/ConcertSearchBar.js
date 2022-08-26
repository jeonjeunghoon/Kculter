import React from 'react';
import './ConcertSearchBar.css';
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap';

function ConcertSearchBar({search, onChange}) {
	return (
		<div className="ConcertSearchBarContainer">
			{/* <input type="text" placeholder="SEARCH" onChange={onChange} /> */}
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control placeholder="SEARCH" onChange={onChange} />
     			</Form.Group>
			</Form>
		
		</div>


	)
}
ConcertSearchBar.propTypes = {
	search: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default ConcertSearchBar;