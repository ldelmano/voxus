import React from "react";
import "./button.scss";

const Button = props => {
  const { variant, children, onClick, disabled } = props;
  let variantClassName = "btn--primary";

  if (variant && variant === "secondary") {
    variantClassName = "btn--secondary";
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={"btn " + variantClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
