import { useState } from 'react';
import AccountPlanA from './pages/accountPlanA';
import AccountPlanB from './pages/accountPlanB';
import AccountPlanC from './pages/accountPlanC';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AccountPlanC />
    </>
  )
}

export default App
