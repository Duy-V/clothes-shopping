import React, { useState, createContext, useContext } from "react";
import { initialState, TProduct, TStoreProducts } from './state';
import { ProductsActions } from './actions';


export const ProductsContext = React.createContext<{
    state: TProduct,
    dispatch: React.Dispatch<ProductsActions>;
}>({
    state: initialState,
      dispatch: () => undefined,
});