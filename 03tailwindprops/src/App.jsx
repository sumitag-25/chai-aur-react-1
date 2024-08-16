import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : 'sumit',
    age : 21
  }

  let newArr = [1,2,3,4];

  return (
    <>
      <h1 className="bg-green-500 rounded-xl p-4 mb-4">
      Hello world!
    </h1>
    <Card username='chaiaurcode' btnText='visit me' someObject={myObj} someArr={newArr} />
    <Card username='sumit' btnText='click me' />
      
    </>
  )
}

export default App