import React, { useState } from "react";

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Travel",
    amount: 250,
    date: new Date(2021, 5, 13),
  },
  {
    id: "e2",
    title: "Bus",
    amount: 350,
    date: new Date(2022, 6, 23),
  },
  {
    id: "e3",
    title: "Books",
    amount: 200,
    date: new Date(2022, 6, 14),
  },
  {
    id: "e4",
    title: "House Rent",
    amount: 100,
    date: new Date(2022, 7, 15),
  }
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {

    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
    console.log(updatedExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};
export default App;
