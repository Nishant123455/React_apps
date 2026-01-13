import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    //counter = counter + 1
    /*
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)

    remember fiber algo / or react algo send data in bundel wait for sometime than update last request so one one value add or updated 

    */
   setCounter(prevcounter => prevcounter + 1)// prevcounter is last updated state.
   setCounter(prevcounter => prevcounter + 1)
   setCounter(prevcounter => prevcounter + 1)
   setCounter(prevcounter => prevcounter + 1)
   /* now above setcounter can update and add + 4 in the count button*/


    console.log('Add button clicked', counter)
  }

  const subValue = () => {
    //counter = counter - 1
    if (counter <= 0 ){
      alert("less than zero not possible!");
      return;
    }
    setCounter(counter - 1)
    console.log('Sub button clicked', counter)
  }
  
  const Clear = () => {
    setCounter(0)
    confirm.log('clear clicked')

  }


  return (
    <>
    <h1>Counter Application</h1>
    <h1>Counter Value: {counter}</h1>

    <button onClick={addValue}> Add value</button>
    <button onClick={subValue}>Sub Value</button>
    <br />
    <button onClick={Clear}>Clear</button>
    </>
  )
}

export default App
