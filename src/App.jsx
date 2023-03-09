import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}  />;
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  )
}

export default App
