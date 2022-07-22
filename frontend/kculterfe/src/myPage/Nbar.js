import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Nbar() {
    return (
        <>
            {/* NavBar */}								
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                <div class="mx-5">
                    <Navbar.Brand href="/">DASHBOARD</Navbar.Brand>
                </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />									
                    <Navbar.Collapse id="responsive-navbar-nav">									
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>									
                            <Nav.Link href="#login" class="mx-2">kculter</Nav.Link>
                        </Nav>
                        <div class="mx-4">
                            <i class="bi bi-list"></i>
                        </div>
                    </Navbar.Collapse>									
            </Navbar>
        </>
    )
}

export default Nbar;