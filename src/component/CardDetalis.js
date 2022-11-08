import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardDetalis = (props) => {
  console.log(props);
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant='top' src={props.img} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.description}</Card.Text>
				<Button variant='primary'>Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};

export default CardDetalis;
