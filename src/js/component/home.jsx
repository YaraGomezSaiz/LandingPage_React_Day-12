import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//import components
import Navbar1 from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div className="main-container">
			<div>
				<Navbar1 />
			</div>
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
			</div>
		</div>
	);
};

export default Home;
