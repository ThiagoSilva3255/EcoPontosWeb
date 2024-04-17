import React from "react";
import LinkRoute from "../LinkRoute/LinkRoute";
import "../Navbar/StyleNavBar.css";
import BurguerMenu from "../BurguerMenu/BurguerMenu";
const Navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li className="animatedLink">
					<LinkRoute
						classe=" buttonSmall"
						caminho="/SignUp"
						nome="Benefícios"
					/>
				</li>
				<li className="animatedLink">
					<LinkRoute
						classe="buttonSmall"
						caminho="/SignUp"
						nome="Sobre nós"
					/>
				</li>
				<li>
					<LinkRoute
						classe="buttonGreen buttonSmall btn-animated"
						caminho="/Login"
						nome="Login"
					/>
				</li>
			</ul>
			<BurguerMenu />
		</nav>
	);
};

export default Navbar;
