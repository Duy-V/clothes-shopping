import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import './App.css'
import { productsReducer } from './state/reducer';
import { initialState } from './state/state';
import { useReducer } from "react"
import { ProductsContext } from './state/context';
import FooterPage from './pages/FooterPage/FooterPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [state, dispatch] = useReducer(productsReducer, initialState);



  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      <div>
        <NavBar />
        <Outlet />
        <FooterPage />
      </div>
    </ProductsContext.Provider>

  )
}

export default App
