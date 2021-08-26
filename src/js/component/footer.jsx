import React from "react";
import { Navbar } from "react-bootstrap";

export default function Footer() {
	return (
		// <div className="mt-4 footer">
		// 	<footer className="footer mt-auto py-3 text-center ">
		// 		<p>
		// 			<i className="fas fa-baseball-ball fa-s" />
		// 			<span> Copyrigth</span>
		// 		</p>
		// 	</footer>
		// </div>

		<Navbar
			className="footer"
			collapseOnSelect
			expand="xxl"
			bg="dark"
			variant="dark">
			<Navbar.Text className="mx-auto">Copyright</Navbar.Text>
		</Navbar>
	);
}
