import React from "react";
import logo from "../assets/logo.svg";
import "./Header.css";

export const Header = ({ setLogin }) => {
  function handleLogout() {
    setLogin(false);
  }

  return (
    <header>
      <img src={logo} />
      <button onClick={() => handleLogout()} className ='inicio'>Inicio</button>
    </header>
  );
};
