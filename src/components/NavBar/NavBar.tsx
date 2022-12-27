import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import HomePage from '../../pages/HomePage/HomePage';
import { ProductsContext } from "../../state/context"
import { openCart } from '../../state/reducer';
import { useReadLocalStorage } from 'usehooks-ts';
import { TStoreProducts } from "../../state/state"
function NavBar() {
    const { state, dispatch } = useContext(ProductsContext)
    const cartItems = useReadLocalStorage<TStoreProducts[]>('storedSelectedItems')
    console.log(cartItems)
    const [isOpen, setIsOpen] = useState(true)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
        dispatch(openCart(isOpen))
    }

    return (
        <div className="flex flex-row flex-wrap mb-[50px] bg-[#F6DBAD]">
            <nav className="basis-1/2 flex justify-center">
                {[
                    ['Home', '/'],
                    ['List Products', '/list-products'],

                ].map(([title, url]) => (
                    <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                ))}
            </nav>
            <div className="basis-1/4 " >

                <HomePage />

            </div>
            <button className="basis-1/4 rounded-full"
                onClick={() => handleIsOpen()}
                style={{ width: "3rem", height: "3rem", position: "relative" }}
            >
                <div>

                    <FontAwesomeIcon icon={faCartPlus} className="h-7" />

                    <strong className=" ">
                        {cartItems?.reduce((accumulator, currentValue) => {
                            return accumulator + currentValue.quantity
                        }, 0)}
                    </strong>
                </div>
                {/* <FontAwesomeIcon icon={faCartPlus} /> */}
            </button>
        </div >

    )
}

export default NavBar
