import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { useMediaQuery } from "react-responsive";
import Sidebar from '../idolListPage/Sidebar';
import concertItem from '../idolListPage/sidebar.json';
import '../idolListPage/sidebar.css';


function OffCanvasSidebar(props) {
	const isSm = useMediaQuery({
		query : "(max-width:512px)"
	});

	return (
		<>
			<Offcanvas show={ props.isOpen && isSm } onHide={props.sideClose}>
				<div className='inCanvas'>
					<Sidebar pageidx={0} items={concertItem}/>
				</div>
			</Offcanvas>
		</>
	);
}

export default OffCanvasSidebar;
