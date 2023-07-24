import React from "react";
import { Card } from "../Card/Card";
import noCard from "../assets/noCard.svg";
import "./List.css";

export function List({ listTransactions, removeTransaction }) {
  return (
    <ul className="main__list">
      {listTransactions.length > 0 ? (
        <>
          {listTransactions.map((transaction, index) => (
            <Card
              key={index}
              transaction={transaction}
              removeTransaction={removeTransaction}
            />
          ))}
        </>
      ) : (
        <>
          <p>Você ainda não possui nenhum lançamento</p>
          <img src={noCard} />
        </>
      )}
    </ul>
  );
}
