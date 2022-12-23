import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import ListProducts from './components/ListProducts/ListProducts';

import Cart from './components/Cart/Cart';
import DetailedProduct from './components/DetailedProduct/DetailedProduct';
import { TProduct } from './state/state';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/list-products/:id", element: <DetailedProduct /> },
      {
        path: "/list-products",
        element: <ListProducts />,
        children: [],
      },

      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  }
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <RouterProvider router={router} />

)
