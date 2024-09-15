import { useState } from 'react';
import AccountPlanA from './pages/accountPlanA';
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AccountPlanA />
    </>
  )
}

export default App
