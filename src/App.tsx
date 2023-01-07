import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import './App.css'
import { productsReducer } from './state/reducer';
import { initialState } from './state/state';
import { useReducer } from "react"
import { ProductsContext } from './state/context';
import FooterPage from './pages/FooterPage/FooterPage';
import NavBar from './components/NavBar/NavBar';
import Cart from "./components/Cart/Cart";
import ModalMessage from './components/Modal/ModalMessage';
function App() {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  let isOpen = state.openCart()



  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      <div>
        <div >
          <ModalMessage />
          <NavBar />
          {
            isOpen ? (
              <div className="flex flex-row">

                <div className="basis-1/4">

                  <Cart />
                </div>
                <div className="basis-3/4">

                  <Outlet />
                </div>


              </div>) : <Outlet />

          }

          {/* <Cart /> 
          <Outlet />*/}
        </div>

        <FooterPage />
      </div>
    </ProductsContext.Provider >

  )
}

export default App
