import React from "react";

//import styles
import "../../styles/index.scss";

//import components
import Navbar1 from "./navbar.jsx";
import Jumbotron1 from "./jumbotron.jsx";
import Card1 from "./card.jsx";
import Footer1 from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="">
			<div>
				<Navbar1 />
			</div>
			<div className="container container-body mx-auto">
				<div className="jumbotron">
					<Jumbotron1 />
				</div>
				<div className="d-flex justify-content-around pt-3 mt-3 mb-3 ">
					<Card1 />
					<Card1 />
					<Card1 />
					<Card1 />
				</div>
			</div>

			<Footer1 />
		</div>
	);
};

export default Home;
