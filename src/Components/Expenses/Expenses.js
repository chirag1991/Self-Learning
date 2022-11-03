import React from 'react';
//css import
import './Expenses.css';
//component import
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses=(props)=>{
    return(
    <Card className="expenses">
     {
                props.item.map(
                    expense => (
                        <ExpenseItem 
                            key={ expense.expensesId }
                            date={ expense.expenseDate } 
                            title={ expense.expensesName } 
                            amount={ expense.expensesPrice } />
                    )
                )
     }
    </Card>
    );
}
export default Expenses;