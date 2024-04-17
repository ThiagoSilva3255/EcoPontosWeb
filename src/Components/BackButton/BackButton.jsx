import React from "react";
import setaBack from "../../Assets/back.png";
import "../BackButton/BackButton.css";

const BackButton = () => {
  return (
    <button className="backBtn">
      <img src={setaBack} alt="Voltar" />
    </button>
  );
};

export default BackButton;
