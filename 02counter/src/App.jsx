import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'

function App() {
  function addCount() {
    if(counter < 20)
    {
      counter += 1;
      setCounter(counter)
    }
  }
  let [counter , setCounter] = useState(12)
  function removeCount() {
    if(counter > 0)
    setCounter(counter-1)
  }
  




  return (
    <>
      <Header />
      <br />
      <button onClick={addCount}>Add Counter</button>
      <button onClick={removeCount}>Remove Count</button>
      <h1>Counter : { counter}</h1>
      <h2>Counter :{counter} </h2>
      <p>The value of counter is : {counter} </p>
      <button>{counter}</button>
    </>
  )
}

export default App
