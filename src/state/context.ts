import React from "react";
import { initialState, TProduct } from './state';
import { ProductsActions } from './actions';


export const ProductsContext = React.createContext<{
    state: TProduct,
    dispatch: React.Dispatch<ProductsActions>;
}>({
    state: initialState,
      dispatch: () => undefined,
});