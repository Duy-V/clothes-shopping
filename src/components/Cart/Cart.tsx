import React from 'react'
import { useState, useContext } from 'react';
import { ProductsContext } from "../../state/context"
function Cart() {
    const { state, dispatch } = useContext(ProductsContext)
    console.log(state)
    return (
        <div>
            CART OF MINE
        </div>
    )
}

export default Cart
