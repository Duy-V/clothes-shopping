import { Dispatch, SetStateAction, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts';
import { TStoreProducts } from './state/state';
interface UseCartOutput {
    cartItems: TStoreProducts[]
    handleAdd: (product: TStoreProducts) => void
    setCartItems: Dispatch<SetStateAction<TStoreProducts[]>>
}

function useCart(initalCartItems?: TStoreProducts[]): UseCartOutput {
    // let [cartItems, setCartItems] = useState<TStoreProducts[]>(initalCartItems || []);

    let [cartItems, setCartItems] = useLocalStorage<TStoreProducts[]>("storedSelectedItems", []);
    const handleAdd = (product: TStoreProducts) => {
        console.log("duycart", product)
        let index = cartItems.findIndex(function (item) {
            return item.id === product.id;
        });

        if (index > -1) {
            let newCartItems = cartItems.map((cartItem) => {

                return cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            })
            setCartItems(newCartItems)
        } else {

            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }

    }
    return {
        cartItems, setCartItems, handleAdd
    }
}

export default useCart