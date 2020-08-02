import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import "./Menu.css";
// import ButtonLink from "../button-link";
import Button from "../button";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Carolflix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
