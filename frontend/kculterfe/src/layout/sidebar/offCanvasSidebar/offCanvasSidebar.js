import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { useMediaQuery } from "react-responsive";
import Sidebar from '../concertPage/Sidebar';
import concertItem from '../concertPage/sidebar.json';
import '../concertPage/sidebar.css';


function OffCanvasSidebar() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const isSm = useMediaQuery({
		query : "(max-width:512px)"
	});
	if (show && isSm == false)
		setShow(false);

	return (
		<>
			<div className="sidebarToggle">
				<Button variant="primary" onClick={handleShow}>
					Launch
				</Button>
			</div>
			<Offcanvas show={ show && isSm } onHide={handleClose} responsive="lg">
				<div className='inCanvas'>
					<Sidebar pageidx={0} items={concertItem}/>
				</div>
			</Offcanvas>
		</>
	);
}

export default OffCanvasSidebar;
