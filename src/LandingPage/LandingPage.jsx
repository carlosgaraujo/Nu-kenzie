import React from "react";
import logo2 from "../assets/logo2.png";
import landing from "../assets/landing.svg";
import "./LandingPage.css";
import "../../src/App.css";

export default function LandingPage({ setLogin }) {
  function handleLogout() {
    setLogin(true);
  }
  return (
    <section className="landingPage">
      <div className="text__container">
        <img src={logo2} />
        <p>Centralize o controle das suas finanças</p>
        <span>de forma rápida e segura</span>
        <button onClick={() => handleLogout()}>Iniciar</button>
      </div>
      <div>
        <img className="landing" src={landing} />
      </div>
    </section>
  );
}
