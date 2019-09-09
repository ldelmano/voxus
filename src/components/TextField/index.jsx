import React, { useState, useEffect } from "react";
import "./textfield.scss";
import flag from "../../assets/flag-brazil@2x.png";
import arrow from "../../assets/arrow-dropdown.png";

const TextField = props => {
  const { label, isPhone, isEmail, isWebUrl, required, validation } = props;
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState(null);
  const [dataValue, setDataValue] = useState("");

  const inputType = isEmail ? "email" : "text";

  const phoneMask = value => {
    let phoneVal = value;

    // Remove o que não é dígito
    phoneVal = phoneVal.replace(/\D/g, "");

    //Coloca parênteses em volta dos dois primeiros dígitos
    phoneVal = phoneVal.replace(/^(\d{2})(\d)/g, "($1) $2");

    //Coloca hífen entre o quarto e o quinto dígitos
    phoneVal = phoneVal.replace(/(\d)(\d{4})$/, "$1-$2");

    setPhone(phoneVal);
    setDataValue(phoneVal);
  };

  const emailMask = value => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(value).toLowerCase());
  };

  const urlMask = value => {
    let re = /(www.|http:|https:)(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    return re.test(String(value).toLowerCase());
  };

  const handleChange = e => {
    if (isPhone) {
      return phoneMask(e.target.value);
    }

    setDataValue(e.target.value);
  };

  const validate = val => {
    setErrors("");

    if (required && !val) {
      return setErrors("Este campo é obrigatório!");
    }

    if (isEmail) {
      let isValid = emailMask(val);

      return isValid ? setErrors("") : setErrors("E-mail inválido.");
    }

    if (isPhone && val.length < 14) {
      return setErrors("Telefone Inválido.");
    }

    if (isWebUrl) {
      let isValid = urlMask(val);

      return isValid ? setErrors("") : setErrors("Domínio inválido.");
    }
  };

  useEffect(() => {
    if (validation) {
      validate(dataValue);
    }
  }, [validation]);

  if (isPhone) {
    return (
      <div className="phone">
        <div className="phone__input">
          <div className="phone__localization">
            <ul>
              <li>
                <img src={flag} alt="Brazil" />
              </li>
              <li>
                <img src={arrow} alt="Select Country" />
              </li>
            </ul>
          </div>
          <label className="text-field">
            <input
              type="text"
              placeholder=" "
              value={phone}
              onChange={handleChange}
              onBlur={e => validate(e.target.value)}
              maxLength="15"
            ></input>
            <span>{label}</span>
          </label>
        </div>

        {errors && (
          <div className="text-field__error">
            <span>{errors}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="input">
      <div className="input__container">
        <label className="text-field">
          <input
            type={inputType}
            placeholder=" "
            onChange={handleChange}
            onBlur={e => validate(e.target.value)}
          ></input>
          <span>{label}</span>
        </label>
      </div>

      {errors && (
        <div className="text-field__error">
          <span>{errors}</span>
        </div>
      )}
    </div>
  );
};

export default TextField;
