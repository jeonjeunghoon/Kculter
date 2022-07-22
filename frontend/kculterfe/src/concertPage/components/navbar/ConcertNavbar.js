import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ConcertNavbar() {
  return (
      <Navbar bg="light">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
      </Navbar>
  );
}

export default ConcertNavbar;