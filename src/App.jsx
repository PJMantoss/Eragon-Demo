import { useState } from 'react';
import AccountPlanA from './pages/accountPlanA';
import AccountPlanB from './pages/accountPlanB';
import AccountPlanC from './pages/accountPlanC';
import AccountPlanD from './pages/accountPlanD';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AccountPlanD />
    </>
  )
}

export default App
