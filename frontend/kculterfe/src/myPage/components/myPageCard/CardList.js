import React from 'react';
import CardItem from './CardItem';
import { Row, Col } from 'react-bootstrap';

function CardList({ props }) {
	return (
		<>
			<Col sm={10}>
				<Row className="mx-5">
					{ props.map((item, index) => <CardItem key={index} props={item} {...item} />)}
				</Row>
			</Col>
		</>
	)
}

export default CardList;
