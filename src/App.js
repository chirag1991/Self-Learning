import React from "react";
import ExpenseItem from "./Components/ExpenseItem";

function App(){
let expenses = [
    {
        id :'e1',
        title:'School Fee',
        amount:250,
        date: new Date(2021,5,12)
    },
    {
        id :'e2',
        title:'Restaurent',
        amount:50,
        date: new Date(2022,6,22)
    },
    {
        id :'e3',
        title:'Books',
        amount:200,
        date: new Date(2022,6,13)
    },
    {
        id :'e4',
        title:'House Rent',
        amount:100,
        date: new Date(2022,7,14)
    }
];

    let expenseDate = new Date(2021, 3, 23);
    let expenseTitle = "School Fee";
    let expenseAmount = 200;
    return(
        <div>
        <h1>First Componrnt from App.js</h1>
        <ExpenseItem date ={expenses[0].date} 
                     title = {expenses[0].title}
                     amount = {expenses[0].amount}>
        </ExpenseItem>
        <ExpenseItem date ={expenses[1].date} 
                     title = {expenses[1].title}
                     amount = {expenses[1].amount}>
        </ExpenseItem>
        <ExpenseItem date ={expenses[2].date} 
                     title = {expenses[2].title}
                     amount = {expenses[2].amount}>
        </ExpenseItem>
        <ExpenseItem date ={expenses[3].date} 
                     title = {expenses[3].title}
                     amount = {expenses[3].amount}>
        </ExpenseItem>
        </div>
    );
}
export default App;