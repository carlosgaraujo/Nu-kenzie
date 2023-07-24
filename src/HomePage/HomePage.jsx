import React, { useState } from "react";
import { Form } from "../Form/Form";
import { Header } from "../Header/Header";
import { List } from "../List/List";
import TotalMoney from "../TotalMoney/TotalMoney";

import "./HomePage.css";

export function HomePage({
  setLogin,
  listTransactions,
  addTransactions,
  removeTransaction,
  total,
}) {
  return (
    <section className="section__body">
      <Header setLogin={setLogin} />
      <div className="main__container">
        <div className="form__totalMoney">
          <Form
            addTransactions={addTransactions}
            listTransactions={listTransactions}
          />
          <TotalMoney total={total} />
        </div>
        <List
          listTransactions={listTransactions}
          removeTransaction={removeTransaction}
        />
      </div>
    </section>
  );
}
