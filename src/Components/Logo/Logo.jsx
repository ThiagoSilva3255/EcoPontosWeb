import React from "react";
import logoImage from "../../Assets/Logo.png";
import "../Logo/StyleLogo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img className="imagem_logo" src={logoImage} alt="Logo marca" />
    </div>
  );
};

export default Logo;
