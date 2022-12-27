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
function App() {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  let isOpen = state.openCart()



  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      <div>
        <div >

          <NavBar />
          {
            isOpen ? (<div>



              <Outlet />



              <div className="mt-[-203.7vh]">

                <Cart />
              </div>
            </div>) : (<div className="mt-[8vh]">

              <Outlet />
            </div>)
          }
        </div>

        <FooterPage />
      </div>
    </ProductsContext.Provider>

  )
}

export default App
