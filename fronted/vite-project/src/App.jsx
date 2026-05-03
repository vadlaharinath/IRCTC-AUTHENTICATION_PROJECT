import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './Components/Login/Login'
import Bookings from './Components/Bookings/bookings'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp'

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/bookings" element={<Bookings/>}/>
    </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
