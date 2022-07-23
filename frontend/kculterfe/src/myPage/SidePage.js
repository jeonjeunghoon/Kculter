import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import myImg from './logo192.png';

function SidePage() {
    return (
        <div>
            <Card className="text-center text-white border-0 bg-primary">
                <Card.Body >
                    <Card.Title className="pt-3">MY PAGE</Card.Title>
                    <Card.Img src={myImg} style={{ width: '4rem'}} className="pt-3"></Card.Img>
                    <Card.Subtitle className="pt-2">조현진</Card.Subtitle>
                    <div className="py-5 mb-5">
                        <ListGroup.Item className="bg-primary text-white border-0">Home</ListGroup.Item>
                        <ListGroup.Item className="bg-primary text-white border-0">Dashboard</ListGroup.Item>
                        <ListGroup.Item className="bg-primary text-white border-0">Settings</ListGroup.Item>
                    </div>
                    <div className="py-5"></div>
                    <Button className="pt-5">Logout</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SidePage;