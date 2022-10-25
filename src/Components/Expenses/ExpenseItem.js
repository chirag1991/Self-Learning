import React, {useState} from 'react';
//css Import
import './ExpenseItem.css';
//Component Import
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem=(props)=>{
   const [title, setTitle] = useState(props.title);

const handleClick=()=>
{
    setTitle('New Title');
}
    return(
        <Card className="expense-item">
           <ExpenseDate date = {new Date(props.date)}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={handleClick}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;