import { useParams } from 'react-router-dom';
import { useState, useContext } from 'react';
import { TStoreProducts } from "../../state/state"
import { ProductsContext } from "../../state/context"
import { addProduct } from '../../state/reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import useCart from '../../useCart';



function DetailedProduct() {
    const { state, dispatch } = useContext(ProductsContext)

    let { id } = useParams();

    const { cartItems, setCartItems, handleAdd } = useCart()

    console.log(state.products)


    return (
        <div className="">
            {state.products.map((selectedItem: TStoreProducts) => (
                selectedItem.id == id && (
                    <div className="flex flex-row justify-center gap-x-5 h-[100vh]" key={selectedItem.id}>
                        <div>
                            <img src={`${selectedItem.image}`} alt="Girl in a jacket" width="300" height="400" />

                        </div>
                        <div className="flex flex-col pt-10">
                            <h4>{selectedItem.name}</h4>
                            <h4>{selectedItem.price}</h4>
                            <h4>{selectedItem.rating}</h4>
                            <h4>{selectedItem.description}</h4>
                            <h4>{selectedItem.brand}</h4>
                            <h4>{selectedItem.countInStock}</h4>
                            <button className="flex justify-center rounded-lg px-6 py-3 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 mt-[20px]" onClick={() => handleAdd(selectedItem)}> <FontAwesomeIcon icon={faCartPlus} /></button>
                        </div>
                    </div>
                )
            ))}
        </div>
    )
}

export default DetailedProduct
