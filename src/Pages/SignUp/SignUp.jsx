import React from "react";
import SideImage from "../../Components/SideImage/SideImage";
import BackButton from "../../Components/BackButton/BackButton";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import '../SignUp/StyleSignUp.css'

const SignUp = () => {
  return (
    <div className="signUp-conteiner">
      <SideImage />
      <section>
        <div className="voltarTitulo">
        <BackButton />
        <h1>Cadastre-se no EcoPontos</h1>
        </div>
        <SignUpForm />
      </section>
    </div>
  );
};

export default SignUp;
