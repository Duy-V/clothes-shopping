import {TStoreProducts} from "../state/state"
export enum ActionType {
    AddProduct,
   RemoveProduct, OpenCart , CloseCart
  }
  
  export interface AddProduct {
    type: ActionType.AddProduct;
    payload: {product:TStoreProducts, numOfSelectedProduct?: number};
  }
 
  export interface RemoveProduct {
    type: ActionType.RemoveProduct;
    payload: { id: number; };
  }

  export interface OpenCart {
    type: ActionType.OpenCart;
    payload: { isOpen: boolean; };
  }
  export interface CloseCart {
    type: ActionType.CloseCart;
    payload: { isOpen: boolean; };
  }
  
  
  export type ProductsActions = AddProduct  | RemoveProduct | OpenCart | CloseCart;