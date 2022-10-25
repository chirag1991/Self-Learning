import React from "react";

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = () => {
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
        amount:350,
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

    return(
        <div>
        <h1>First Componrnt from App.js</h1>
        <NewExpense/>
        <Expenses item = {expenses}/>
        </div>
    );
}
export default App;