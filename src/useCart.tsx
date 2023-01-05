import { Dispatch, SetStateAction, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts';
import { TStoreProducts } from './state/state';
interface UseCartOutput {
    cartItems: TStoreProducts[]
    handleAdd: (product: TStoreProducts) => void
    handleDelete: (product: TStoreProducts) => void
    setCartItems: Dispatch<SetStateAction<TStoreProducts[]>>
    isOpenModal: boolean
    setIsOpenModal: Dispatch<SetStateAction<boolean>>
}

function useCart(initalCartItems?: TStoreProducts[]): UseCartOutput {

    let [cartItems, setCartItems] = useLocalStorage<TStoreProducts[]>("storedSelectedItems", []);
    let [isOpenModal, setIsOpenModal] = useState(false)
    const handleAdd = (product: TStoreProducts) => {
        let index = cartItems.findIndex(function (item) {
            return item.id === product.id;
        });
        cartItems.findIndex(function (item) {
            return item.quantity === 20 && setIsOpenModal(true);
        });


        if (index > -1) {
            let newCartItems = cartItems.map((cartItem) => {

                if (cartItem.id === product.id) {
                    return cartItem.quantity < 20 ? { ...cartItem, quantity: cartItem.quantity + 1 } : { ...cartItem, quantity: 20 }
                } else {
                    return cartItem
                }
            })
            setCartItems(newCartItems)

        } else {

            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }

    }
    const handleDelete = (product: TStoreProducts) => {
        let index = cartItems.findIndex(function (item) {
            return item.id === product.id;
        });

        if (index > -1) {
            let newCartItems = cartItems.map((cartItem) => {

                return cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            })
            setCartItems(newCartItems)
        }

    }
    return {
        cartItems, setCartItems, handleAdd, handleDelete, isOpenModal, setIsOpenModal
    }
}

export default useCart