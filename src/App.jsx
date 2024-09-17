import { useState } from 'react';
import AccountPlanA from './pages/accountPlanA';
import AccountPlanB from './pages/accountPlanB';
import AccountPlanC from './pages/accountPlanC';
import AccountPlanD from './pages/accountPlanD';
import AccountPlanE from './pages/accountPlanE';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AccountPlanE />
    </>
  )
}

export default App;