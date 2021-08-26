import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "reactstrap";

export default function Navbar1() {
	return (
		<Navbar
			collapseOnSelect
			fixed="top"
			expand="lg"
			bg="dark"
			variant="dark">
			<Container>
				<Navbar.Brand href="#home">Start-Bootstrap</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Nav className="justify-content-end">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#home">About</Nav.Link>
						<Nav.Link href="#features">Service</Nav.Link>
						<Nav.Link href="#pricing">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
