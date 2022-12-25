import {TStoreProducts, TProduct} from './state';
import { ProductsActions, ActionType, AddProduct, RemoveProduct, OpenCart } from './actions';

export function productsReducer(state : TProduct, action : ProductsActions): TProduct {
    switch (action.type) {
        case ActionType.AddProduct:
            console.log(state)
            let newNumOfSelectedProducts = action.payload.numOfSelectedProduct
            return {
                ... state,
                products: state.products.map((product: TStoreProducts) =>
                product.id === action.payload.product.id
                  ? {
                      ...product,
                      countInStock: action.payload.product.countInStock
                    }
                  : product
              ),
                numOfSelectedProducts: newNumOfSelectedProducts
            };
            case ActionType.OpenCart:
                let isOpen = action.payload.isOpen
            console.log(isOpen)
                return {
                    ...state,
                    openCart: ()=> (isOpen)
                }
        default:
            return state;
    }
}


export const addProduct = (product : TStoreProducts, numOfSelectedProduct : number) : AddProduct => ({
    type: ActionType.AddProduct,
    payload: {
        product,
        numOfSelectedProduct
    }
});

export const openCart = (isOpen: boolean) : OpenCart => ({
    type: ActionType.OpenCart,
    payload: {isOpen}
});
