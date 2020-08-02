import React from "react";
import Logo from "../../assets/images/Logo.png";
import "./Menu.css";
// import ButtonLink from "../button-link";
import Button from "../button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Carolflix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Meu botão
      </Button>
    </nav>
  );
}

export default Menu;
