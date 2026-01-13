//Note: In this project we learn about useCallback(use for optimazition), useEffect(to run function all time dependencies changed ), uesref(to take referance) hook
import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'



function App() {
  const [length, setLength] = useState(8)
  const [NumAllowed, isNum] = useState(false)
  const [CharAllowed, isChar] = useState(false)
  const [passord, setPass] = useState("")

  // function for random pass generator with using useCallback hook that give optimazition
  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (NumAllowed) str += "0123456789"
    if (CharAllowed) str += "!@#$%^&*(){}?|"

    for ( let i = 1; i <= length ; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPass(pass)


  }
  , [length, NumAllowed, CharAllowed, setPass])


  const copytoclipboard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(passord)

  }, [passord])


// useEffect hook that help use to run the  psswordgenerator function whenever dependiencies changes
  useEffect(() => {
    PasswordGenerator()
  }, [length, NumAllowed, CharAllowed, PasswordGenerator])

  // using useRef to pass the referance of text field to copy button

  const passRef = useRef(null)

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-mg rounded-lg px-4 py-1 my-8 text-white bg-gray-700'>
      <h1 className='text-center my-3'>PASSWORD GENERATOR</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input type="text"
        value={passord}
        className='outline-none w-full px-3 py-1 text-black bg-white' 
        placeholder="Password"
        readOnly
        ref={passRef}
        />
        <button onClick= {copytoclipboard} className='btn-primary'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items- center gap-x-1 '>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer accent-blue-500'
          onChange={(e) => {setLength(e.target.value)}} />
          <label >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked = {NumAllowed}
          id = "numInput"
          className='accent-blue-500'
          onChange={( ) => { isNum(prev => !prev)}} />
          <label htmlFor='numInput' >Number</label>
        </div>
        
        <div className='flex items-center gap-x-1 ' >
          <input type="checkbox"
          defaultChecked = {CharAllowed}
          id = "charInput"
          className='accent-blue-500'
          onChange={( ) => { isChar(prev => !prev)}} />
          <label htmlFor='charInput' >Character</label>
        </div>
      </div>
      
     </div>
    </>
  )
}

export default App
