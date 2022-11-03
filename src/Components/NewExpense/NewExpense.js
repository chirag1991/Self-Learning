import React from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>
{
   //function for getting props values from child component
   const saveExpenseDataHandler = (receivedExpenseData) =>
   {
      const expenseData = {
         ...receivedExpenseData,
         //id:Math.random().toString() 
      }

      props.onAddExpense(expenseData);

      console.log(expenseData);
   };

 return(
    <div className="new-expense">
     <ExpenseForm 
     onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
 );
}
export default NewExpense; 
