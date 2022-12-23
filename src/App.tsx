import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import './App.css'

import FooterPage from './pages/FooterPage/FooterPage';
import NavBar from './components/NavBar/NavBar';

function App() {


  return (
    <div>
      <NavBar />
      <Outlet />
      <FooterPage />
    </div>


  )
}

export default App
