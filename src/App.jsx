import { useState } from "react";
import { HomePage } from "./HomePage/HomePage";
import { v4 as uuidv4 } from "uuid";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  const [login, setLogin] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);

  const addTransactions = (transaction) => {
    const newTransactions = { ...transaction, id: uuidv4() };
    setListTransactions([...listTransactions, newTransactions]);
    console.log(newTransactions);
  };

  function removeTransaction(id) {
    if (confirm("Você relamente quer remover essa transação")) {
      const newTransactionsList = listTransactions.filter(
        (transaction) => transaction.id !== id
      );
      setListTransactions(newTransactionsList);
    }
  }

  const total = listTransactions.reduce(
    (acc, { value, type }) => (type === "entrada" ? acc + value : acc - value),
    0
  );

  console.log(total);
  return (
    <div className="App">
      {login ? (
        <HomePage
          setLogin={setLogin}
          listTransactions={listTransactions}
          addTransactions={addTransactions}
          removeTransaction={removeTransaction}
          total={total}
        />
      ) : (
        <LandingPage setLogin={setLogin} />
      )}
    </div>
  );
}

export default App;
