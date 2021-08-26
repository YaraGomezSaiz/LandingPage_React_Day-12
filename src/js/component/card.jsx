import React from "react";
import { Card, Button } from "react-bootstrap";
//import styles
import "../../styles/index.scss";

export default function Card1() {
	return (
		<div className="d-flex card text-center">
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"
				/>

				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and
					</Card.Text>

					<Button className="mx-auto" variant="primary">
						Go somewhere
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
}
