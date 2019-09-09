import React from "react";
import logo from "../../assets/Logo-Voxus.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Voxus" className="footer__logo" />

      <ul className="footer__links">
        <li>
          <a
            href="https://www.voxus.com.br/privacidade.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Termos de serviço
          </a>
        </li>
        <li>
          <a
            href="https://www.voxus.com.br/privacidade.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de privacidade
          </a>
        </li>
        <li>
          <a
            href="https://www.voxus.com.br/opcoes-anuncio.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Opções de anúncio
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
