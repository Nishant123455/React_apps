import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
    name : 'Nishant',
    roll : '12',
  }


  return (
    <>
      
      <Card Price = 'Daku_600' num = '01' ver = '1.0'/>
      <Card Price = 'Daku_100' num = '02' ver = '2.0'/>
      <Card Price = 'Daku_300' num = '03' ver = '3.0'/>
      <Card Price = 'Daku_300' />

    </>
  )
}

export default App
