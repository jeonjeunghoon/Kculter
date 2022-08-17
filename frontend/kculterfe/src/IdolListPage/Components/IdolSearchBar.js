import React from 'react';
import './IdolSearchBar.css';
import PropTypes from 'prop-types'

function IdolSearchBar({search, onChange}) {
	return (
		<div className="IdolSearchBarContainer">
			<input type="text" value={search} onChange={onChange} />
		</div>
	)
}
IdolSearchBar.propTypes = {
	search: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default IdolSearchBar;