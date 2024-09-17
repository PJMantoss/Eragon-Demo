import { useState } from 'react';
import AccountPlanA from './pages/accountPlanA';
import AccountPlanB from './pages/accountPlanB';
import AccountPlanC from './pages/accountPlanC';
import AccountPlanD from './pages/accountPlanD';
import AccountPlanE from './pages/accountPlanE';
import AccountPlanF from './pages/accountPlanF';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AccountPlanF />
    </>
  )
}

export default App;