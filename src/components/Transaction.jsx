import { set } from "mongoose";
import React, { useState, useEffect } from "react";

function TransactionList({refresh, setRefresh}) {
    const[expenses, setExpenses] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:4000/expenses');
            const data = await response.json();
            setExpenses(data);
        }
        if(refresh){
            fetchData();
            setRefresh();
        }
    }, [refresh]);

    function isNegetive(amount) {
        if (amount < 0) {
            return 'red';
        }
        return 'green';
    }

    return (
        <div>
        {expenses.map(expense => (
           <div className='transaction' key={expense._id}>
           <div className='left'>
             <div className="name">{expense.name}</div>
             <div className="description">{expense.description}</div>
           </div>
           <div className="right">
             <div className={`price ${isNegetive(expense.amount)}`}>{expense.amount}</div>
             <div className="datetime">{expense.dateTime}</div>
           </div>
         </div>
        ))}
      </div>
    );
}

export default TransactionList;