import React from "react";
import LinkRoute from "../LinkRoute/LinkRoute";
import "../CTA/CTA.css";
const CTA = () => {
  return (
    <div className="CTA_section">
      <h1>Bem vindo ao EcoPontos!</h1>
      <p>
        Junte pontos em troca de <br />
        benefícios, descontos e muito mais!
      </p>
      <div className="CTA_links">
        <LinkRoute
          classe="buttonGreen buttonBig"
          caminho="/SignUp"
          nome="Começar"
        />
      </div>
    </div>
  );
};

export default CTA;
