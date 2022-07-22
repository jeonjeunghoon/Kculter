import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SidePage from './SidePage';
import Nbar from './Nbar';
import MBody from './MBody';
import Footer from './Footer';

function MyPage() {
  return (
    <Container fluid className="g-0 bg-light">
      <Row className="g-0">
        <Col sm={2}>
            <SidePage />
        </Col>
        <Col className="">
            <Nbar />
            <MBody />
        </Col>
      </Row>
    </Container>
  );									
}

export default MyPage;