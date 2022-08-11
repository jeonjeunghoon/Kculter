import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import Sidebar from '../Sidebar';
import concertItem from '../concertPage/sidebar.json';


function offCanvasSidebar() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div className="sidebarToggle">
				<Button variant="primary" onClick={handleShow}>
					Launch
				</Button>
			</div>
			<Offcanvas show={show} onHide={handleClose} responsive="lg">
				<div className='inCanvas'>
					<Sidebar pageidx={0} items={concertItem}/>
				</div>
			</Offcanvas>
		</>
	);
}

export default offCanvasSidebar;