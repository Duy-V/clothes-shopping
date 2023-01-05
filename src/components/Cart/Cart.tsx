import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { ProductsContext } from "../../state/context"
import { useReadLocalStorage } from 'usehooks-ts'
import { TStoreProducts } from "../../state/state"
import useCart from '../../useCart';
function Cart() {
    const { state, dispatch } = useContext(ProductsContext)
    let [selectedItemsInCart, setSelectedItems] = useState<TStoreProducts>()
    const cartItemsLocal = useReadLocalStorage<TStoreProducts[]>('storedSelectedItems')
    const { cartItems, setCartItems, handleAdd, handleDelete } = useCart()
    let isOpen = state.openCart()

    return (
        <div>
            {isOpen ? (
                <body className="font-poppins antialiased mt-[-50px] z-10 " >
                    <div
                        id="view"
                        className="h-full w-screen flex flex-row"
                        x-data="{ sidenav: true }"
                    >

                        <div
                            id="sidebar"
                            className="bg-[#FFECD0] h-screen md:block shadow-xl px-3 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
                            x-show="sidenav"
                        // @click.away="sidenav = false"
                        >
                            <div className="space-y-6 md:space-y-10 mt-10">
                                <h1 className="font-bold text-4xl text-center md:hidden">
                                    D<span className="text-teal-600">.</span>
                                </h1>
                                <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
                                    ITEMS CART<span className="text-teal-600">.</span>
                                </h1>
                                {cartItemsLocal?.map((cartItem: TStoreProducts) => {
                                    return (
                                        <div id="menu" className="flex flex-col space-y-2">

                                            <div
                                                className="text-sm font-medium text-gray-700 py-2 px-1 hover:bg-[#F6CD8F] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out flex flex-row"
                                            >

                                                <img src={cartItem.image} className="w-12 h-12 fill-current inline-block mr-3 basis-1/3" />
                                                <div className='basis-2/3 flex flex-col'>
                                                    <span className="mr-3 ">Title: {cartItem.name}</span>
                                                    <b></b>
                                                    <div>
                                                        <button onClick={() => handleAdd(cartItem)}>+</button> {cartItem.quantity} <button onClick={() => handleDelete(cartItem)}>-</button>
                                                    </div>

                                                    <span className="mr-3 ">Price: {cartItem.price}x {cartItem.quantity}</span>

                                                </div>

                                            </div>

                                        </div>
                                    )

                                })}
                                <div>
                                    <span className="mr-3 ">Price:  {cartItems?.reduce((accumulator, currentValue) => {
                                        return accumulator + currentValue.quantity * currentValue.price;
                                    }, 0)}
                                    </span>
                                </div>
                                <button className="flex justify-center rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" > THANH TOÁN</button>
                            </div>
                        </div>
                    </div >


                </body >

            ) : ""}




        </div >

    )
}

export default Cart
