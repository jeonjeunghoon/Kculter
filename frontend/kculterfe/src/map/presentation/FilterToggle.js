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
					props.setPlaceholder(() => "Select k-pop stars!")
				}}
			>
			</button>
			<button className='culture-toggle'
				onClick={() => {
					props.setIsKpop(() => false);
					props.setPlaceholder(() => "Select culture place!!");
				}}
			>
			</button>
		</div>
	);
}

export default FilterToggle;