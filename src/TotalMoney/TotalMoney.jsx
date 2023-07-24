import React from "react";
import "./TotalMoney.css";

export default function TotalMoney({ total }) {
  return (
    <section className="totalMoney">
      <div>
        <p>Valor Total:</p>
        <span>$ {total}</span>
      </div>
      <span>O valor se refere ao Saldo</span>
    </section>
  );
}
