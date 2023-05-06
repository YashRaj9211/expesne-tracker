import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import dotenv from 'dotenv';
import axios from 'axios'
import TransactionList from './components/Transaction';


function App() {
  const [name, setName] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('0')
  const [refresh, setRefresh] = useState(false)


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/expenses', {
        name,
        description,
        dateTime,
        amount
      });

      console.log(response.data); // logs the response data from the server
      // window.location.reload();
      setRefresh(true)
    } catch (error) {
      console.log(error);
    }
  }

  function handleRefresh() {
    setRefresh(!refresh);
  }

  return (
    <>
      <div className='main'>
        <h1>$400<span>.00</span></h1>

        {/* form for transction submition */}

        <form onSubmit={handleSubmit}>
          <div className='basics'>
            <input type='text'
              value={name}
              onChange={ev => setName(ev.target.value)}
              placeholder='+200 new TV' />
            <input type='datetime-local'
              value={dateTime}
              onChange={ev => setDateTime(ev.target.value)} />
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

        {/* transaction history */}

        <div className='transactions'>
          <TransactionList
            refresh={refresh}
            setRefresh={handleRefresh} />
        </div>


      </div>
    </>
  )
}

export default App
