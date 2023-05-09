import { useState } from 'react'
import axios from 'axios'
import TransactionList from '../components/Transaction.jsx';
import NewTransaction from '../components/NewTransaction.jsx';

function Home() {
  const [refresh, setRefresh] = useState(true)

  function handleRefresh() {
    setRefresh(!refresh);
  }

  function handleTransactionAdded() {
    setRefresh(true);       
  }

  return (
    <div className='main'>
      <h1>$400<span>.00</span></h1>
      
      <NewTransaction
        onTransactionAdded={handleTransactionAdded}
      />

      <div className='transactions'>
        <TransactionList
          refresh={refresh}
          setRefresh={handleRefresh}
        />
      </div>
    </div>
  )
}

export default Home;
