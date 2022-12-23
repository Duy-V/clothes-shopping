import {TStoreProducts, TProduct} from './state';
import {ProductsActions, ActionType, AddProduct, RemoveProduct} from './actions';

export function productsReducer(state : TProduct, action : ProductsActions): TProduct {
    switch (action.type) {
        case ActionType.AddProduct:
            return {
                ... state,
                products: [... state.products, action.payload.product],
                numOfSelectedProducts: action.payload.numOfSelectedProduct

            };
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
