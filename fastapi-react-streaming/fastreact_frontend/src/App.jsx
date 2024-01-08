import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [ body, setBody ] = useState('')

  const fetchTransactions = async () => {
    const response = await axios.get('http://localhost:7777/get_data');
    const data = response.data
    setBody(data['body'])
  };

  useEffect(() => {
    fetchTransactions();
  }, []);
  

  return (
    <>
    <div>
      {body}
    </div>
    </>
  )
}

export default App
