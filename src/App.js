import React, { useState, useEffect } from "react";

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

let DUMMY_EXPENSE = [];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  function fetchData(){
    fetch('https://localhost:44307/api/Expense').then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            setExpenses(data);
        }
    );
}
  
  useEffect(()=>{
    fetchData();
  },[]);

  
  const addExpenseHandler = (expense) => {
    fetch('https://localhost:44307/api/Expense', {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
          'content-Type' : 'application/json'
      }
  }).then(
      response => {
          fetchData();
          console.log(expense);
      }
  );
  
    
    //*************OldCode to Implement data from Array
    // const updatedExpense = [expense, ...expenses];
    // setExpenses(updatedExpense);
    // console.log(updatedExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};
export default App;
