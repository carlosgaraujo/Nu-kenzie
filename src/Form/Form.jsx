import React, { useState } from "react";
import "./Form.css";

export function Form({ addTransactions }) {
  const [formData, setFormData] = useState({
    value: "",
    description: "",
    type: "entrada",
  });
  typeof formData;

  const submit = (event) => {
    event.preventDefault();
    if (formData.description !== "" && formData.value !== "") {
      addTransactions(formData);
    } else {
      alert("por favor, preencha os campos!");
    }
  };

  return (
    <form onSubmit={submit} noValidate>
      <fieldset>
        <p>Descrição</p>
        <input
          value={formData.description}
          type="text"
          id="description"
          placeholder="descrição"
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
        />
      </fieldset>
      <div className="footer_form">
        <fieldset>
          <p>Valor:</p>
          <input
            value={formData.value}
            type="number"
            id="value"
            placeholder="Insira um valor"
            onChange={(event) =>
              Number(
                setFormData({ ...formData, value: Number(event.target.value) })
              )
            }
          />
        </fieldset>
        <div className="select__container">
          <p>Tipo de entrada</p>
          <select
            onChange={(event) =>
              setFormData({ ...formData, type: event.target.value })
            }
          >
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
      </div>
      <button className="inserir" type="submit">
        Inserir Valor
      </button>
    </form>
  );
}
