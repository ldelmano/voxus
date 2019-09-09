import React from "react";
import logo from "../../assets/Logo-Voxus.png";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Voxus"></img>
      </div>
    </header>
  );
};

export default Header;
