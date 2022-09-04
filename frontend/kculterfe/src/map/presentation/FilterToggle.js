import React from "react";

function FilterToggle(props) {
	return (
		<div className="filter-toggle">
			<button className='kpop-toggle'
				style={{
					backgroundColor:"red",
				}}
				onClick={() => {
					props.setIsKpop(() => true);
				}}
			>
			</button>
			<button className='culture-toggle'
				onClick={() => {
					props.setIsKpop(() => false);
				}}
			>
			</button>
		</div>
	);
}

export default FilterToggle;