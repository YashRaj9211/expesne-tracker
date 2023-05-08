import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import dotenv from 'dotenv';
import axios from 'axios'
import { Link } from 'react-router-dom';

import TransactionList from './components/Transaction';
import NewTransaction from './components/NewTransaction';


function App() {
  const [refresh, setRefresh] = useState(true)

  function handleRefresh() {
    setRefresh(!refresh);
  }

  function handleTransactionAdded() {
    setRefresh(true);
  }

  return (
    <>
      <div className='main'>
        <h1>$400<span>.00</span></h1>
        

        <NewTransaction
        onTransactionAdded={handleTransactionAdded}
        />

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
