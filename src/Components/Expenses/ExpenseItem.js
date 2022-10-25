import React from 'react';
//css Import
import './ExpenseItem.css';
//Component Import
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem=(props)=>{
    
    return(
        <Card className="expense-item">
           <ExpenseDate date = {new Date(props.date)}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            
        </Card>
    );
}

export default ExpenseItem;