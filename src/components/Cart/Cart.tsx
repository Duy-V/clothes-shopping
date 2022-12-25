import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { ProductsContext } from "../../state/context"

import { TStoreProducts } from "../../state/state"

function Cart() {
    const { state, dispatch } = useContext(ProductsContext)
    let [selectedItemsInCart, setSelectedItems] = useState<TStoreProducts>()
    // useEffect(() => {
    //     const rememberMe = localStorage.getItem('storedSelectedItems') === 'true';

    //     setSelectedItems({ rememberMe });
    // }, [])

    console.log(localStorage.getItem('storedSelectedItems'))
    let isOpen = state.openCart()

    return (
        <div>
            {isOpen ? (<div>
                <body className="font-poppins antialiased mt-[-50px] z-10">
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

                                <div id="menu" className="flex flex-col space-y-2">

                                    <a
                                        href=""
                                        className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#F6CD8F] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                                    >

                                        <img src="/src/assets/imgs/banner1.jpg" className="w-12 h-12 fill-current inline-block mr-3" />
                                        <span className="mr-3">Title: { }</span>
                                        <span className="mr-3">Price: { }x { }</span>
                                    </a>

                                </div>
                                <button className="flex justify-center rounded-lg px-6 py-3  text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 mb-[20px]" onClick={() => { }}> Total : { }</button>
                            </div>
                        </div>
                    </div >


                </body >
            </div>
            ) : ""}




        </div >

    )
}

export default Cart
