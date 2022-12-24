import {TStoreProducts} from "../state/state"
export enum ActionType {
    AddProduct,
   RemoveProduct
  }
  
  export interface AddProduct {
    type: ActionType.AddProduct;
    payload: {product:TStoreProducts, numOfSelectedProduct?: number};
  }
 
  export interface RemoveProduct {
    type: ActionType.RemoveProduct;
    payload: { id: number; };
  }
  
  
  export type ProductsActions = AddProduct  | RemoveProduct;