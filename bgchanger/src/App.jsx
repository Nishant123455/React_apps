import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  /*
  Note: onClick = {setState} this is ok because you are giving function to onClick (setState ek function he usko onClick as it is uth ke mil jaayega) but onClick = {setState()} this is not correct and its will 
  show error beacuse this setState() give the return value to onClick but onClick expect function on return Value.
  to solve this use arrow function, beacuse arrow function is a function and you give sunction i side function like this () => setState("whatever").
  */

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}
   >
    <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-while shadow-lg"
        style={{backgroundColor: "red"}}>Red</button>
      </div>
      <div onClick={() => setColor("green")} className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full text-while shadow-lg"
        style={{backgroundColor: "Green"}}>Green</button>
      </div>
      <div onClick={() => setColor("Blue")} className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full text-while shadow-lg"
        style={{backgroundColor: "Blue"}}>Blue</button>
      </div>
      <div onClick={() => setColor("Pink")} className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full text-while shadow-lg"
        style={{backgroundColor: "Pink"}}>Pink</button>
      </div>
      <div onClick={() => setColor("Black")} className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full text-while shadow-lg text-white"
        style={{backgroundColor: "Black"}}>Dark</button>
      </div>
      <div onClick={() => setColor("White")} className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full text-while shadow-lg"
        style={{backgroundColor: "White"}}>White</button>
      </div>
      
    </div>

   </div>
  )
}

export default App
