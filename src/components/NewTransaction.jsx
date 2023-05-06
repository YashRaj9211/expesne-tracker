import React, { useState, useEffect } from "react";
import axios from "axios";

function NewTransaction({ onTransactionAdded }) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    function handleValidation() {
        if (amount === "" || amount === "0" || amount === null) {
            alert("Amount cannot be 0 or empty");
            return false;
        }
        return true;
    }


    async function handleSubmit(e) {
        e.preventDefault();

        if (amount === null || amount === 0) {
            console.log("Amount cannot be null or 0");
            exit();
        };

        try {
            const response = await axios.post('http://localhost:4000/expenses', {
                name,
                description,
                date,
                amount
            });

            console.log(response.data); // logs the response data from the server
            onTransactionAdded();
        }
        catch (error) {
            console.log(error);
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <div className='basics'>
                <input type='text'
                    value={name}
                    onChange={ev => setName(ev.target.value)}
                    placeholder='+200 new TV' />
                <input type='date'
                    value={date}
                    onChange={ev => setDate(ev.target.value)} />
            </div>
            <div className='description'>
                <input type='text'
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}
                    placeholder='Description' />
            </div>
            <div className='amount'>
                <input type='number'
                    value={amount}
                    onChange={ev => setAmount(ev.target.value)}
                    placeholder='Amount' />
            </div>
            <button type='submit'>Add new Transaction</button>
        </form>
    );
}

export default NewTransaction;