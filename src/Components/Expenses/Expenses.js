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
                            key={ expense.id }
                            date={ expense.date } 
                            title={ expense.title } 
                            amount={ expense.amount } />
                    )
                )
     }
    </Card>
    );
}
export default Expenses;