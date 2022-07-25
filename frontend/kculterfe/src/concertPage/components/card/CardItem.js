import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Jeju from '../../jeju.jpg';

function CardItem({item}) {
	console.log(item.img);
	return (
		<a className='cardLink'>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={Jeju} />
				<Card.Body>
					<Card.Title>{item.title}</Card.Title>
					<Card.Text>
						{item.date}
					</Card.Text>
					<Button variant="primary" href={item.path}>Go somewhere</Button>
				</Card.Body>
			</Card>
		</a>
	);
}

export default CardItem;