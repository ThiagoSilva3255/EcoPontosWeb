import React from "react";
import "../Card/Card.css"
const Card = ({ icone, valor, empresa, desconto }) => {
  return (
    <div className="Card">
      <img src={icone} alt="" />
      <p>{valor}Ecos</p>
      <p>{empresa}</p>
      <p>{desconto}</p>
      <button>Resgatar</button>
    </div>
  );
};

export default Card;
