// import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './pages/Login'
// import Home from './pages/Homes'
// import Register from './pages/Register'

function App() {
  
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Register /> */}
      <Login />
      <Footer />
    </>
  )
}

export default App
