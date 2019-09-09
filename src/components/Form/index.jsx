import React, { useState } from "react";
import TextField from "../TextField";
import "./form.scss";
import Button from "../Button";
import Dropdown from "../Dropdown";

const Form = () => {
  const dropdownValues = [
    "<= R$5.000",
    ">= R$5.001 e <= R$30.000",
    ">= R$30.001 e <= R$100.000",
    ">= R$100.001 e <= R$500.000",
    ">= R$500.001",
    "Não se aplica"
  ];

  const [initValidation, setInitValidation] = useState(false);

  const validateForm = () => {
    setInitValidation(true);

    setTimeout(() => {
      let errors = document.querySelector(".text-field__error");

      if (!errors) {
        let freeDemo = document.querySelector(".free-demo button");
        let tksBtn = document.getElementById("thank-you");

        freeDemo.classList.add("fade-out");

        tksBtn.classList.add("fade-in");
      }
    }, 1000);
  };

  return (
    <form className="form">
      <TextField label="Nome Completo" required validation={initValidation} />
      <TextField
        label="Telefone"
        isPhone
        required
        validation={initValidation}
      />
      <TextField
        label="Endereço de email"
        isEmail
        required
        validation={initValidation}
      />
      <TextField label="Nome da empresa" required validation={initValidation} />
      <TextField
        label="URL do site"
        isWebUrl
        required
        validation={initValidation}
      />

      <Dropdown
        values={dropdownValues}
        inputName="budget"
        label="Verba mensal em mídia"
      ></Dropdown>

      <div className="free-demo">
        <Button variant="primary" onClick={validateForm}>
          Experimentar gratuitamente
        </Button>
      </div>

      <div className="success-message" id="thank-you">
        <Button variant="secondary" disabled>
          Obrigado!
        </Button>

        <p>Entraremos em contato em até 24hs úteis.</p>
      </div>
    </form>
  );
};

export default Form;
