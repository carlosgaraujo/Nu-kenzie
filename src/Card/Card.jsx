import React from "react";
import "./Card.css";

import trash from "../assets/trash.svg";
export function Card({ transaction, removeTransaction }) {
  return (
    <li className="card__container" >
      <div>
        <h3>{transaction.description}</h3>
        <p>{transaction.type}</p>
      </div>
      <div className="card__remove">
        <span>R$ {transaction.value}</span>
        <button onClick={() => removeTransaction(transaction.id)}>
          <img src={trash} />
        </button>
      </div>
    </li>
    );
}
