import React from "react";
import LinkRoute from "../LinkRoute/LinkRoute";
import "../Navbar/StyleNavBar.css";
import BurguerMenu from "../BurguerMenu/BurguerMenu";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <LinkRoute
            classe=" buttonSmall"
            caminho="/SignUp"
            nome="Benefícios"
          />
        </li>
        <li>
          <LinkRoute classe="buttonSmall" caminho="/SignUp" nome="Sobre nós" />
        </li>
        <li>
          <LinkRoute
            classe="buttonGreen buttonSmall"
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
