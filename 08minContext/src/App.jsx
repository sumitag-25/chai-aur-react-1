import { useState } from 'react'
import './App.css'
import UserContectProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  return (
    <UserContectProvider>
   <Login/>
   <Profile/>
    </UserContectProvider>
  )
}

export default App
