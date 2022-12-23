import { TStoreProducts, TProduct } from './state';
import {ProductsActions, ActionType, AddProduct, RemoveProduct} from './actions';

export function productsReducer(state : TStoreProducts, action : ProductsActions): TStoreProducts {
    switch (action.type) {
        case ActionType.AddProduct:
            return {
                ... state,
              //   products: state.products.map((product: TStoreProducts) =>
              //   product.id === action.payload.selectedItem.id
              //     ? {
              //         ...product,
              //         countInStock: {20 - action.payload.numOfSelectedProduct}
              //       }
              //     : product
              // ),
              numOfSelectedProducts: action.payload.numOfSelectedProduct        
            };
        default:
            return state;
    }
}


export const addProduct = (product: TStoreProducts,numOfSelectedProduct  : number ) : AddProduct => ({
  type: ActionType.AddProduct, 
  payload: {product, numOfSelectedProduct}
});



