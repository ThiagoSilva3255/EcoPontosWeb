import React from "react";
import Input from "../Input/Input";
import "../SignUpForm/SignUpForm.css";
import SubtmitBtn from "../SubmitBtn/SubtmitBtn";

const SignUpForm = () => {
  return (
    <form action="">
      <label>
        Nome
        <Input />
      </label>
      <label>
        Email
        <Input />
      </label>
      <label>
        Senha
        <Input />
      </label>
      <SubtmitBtn valueSubmit={'Cadastrar'} />
    </form>
  );
};

export default SignUpForm;
