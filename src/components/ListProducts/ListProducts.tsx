import React from 'react'
import { useState, useContext } from 'react';
import Product from "../Product/Product"
import { ProductsContext } from "../../state/context"


function ListProducts() {
    const { state } = useContext(ProductsContext)

    console.log(state)

    return (
        <div className="container mx-auto">

            <div className="flex gap-y-6 gap-x-6 flex-wrap justify-center">
                {state.products.map((product) => {
                    return (
                        <Product key={product.id} product={product} />
                    )
                })
                }
            </div>
        </div>
    )
}

export default ListProducts
