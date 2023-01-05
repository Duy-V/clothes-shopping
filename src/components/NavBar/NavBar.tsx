import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
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
                    ['Cart', '/cart-page']

                ].map(([title, url]) => (
                    <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                ))}
            </nav>
            <div className="basis-1/4 " >

                <nav className="mt-0 flex h-12 items-center px-4 justify-between ">

                    <form
                        onSubmit={() => { }}
                        className="mx-auto hidden w-full justify-center md:flex"
                    >
                        <input
                            onChange={() => { }}
                            type="text"
                            className="rounded-tr-none rounded-br-none p-1 text-sm   focus:ring-0"
                            placeholder="Search products"
                        />

                        <button
                            className="rounded rounded-tl-none rounded-bl-none bg-[#E4AE50] p-1 text-sm dark:text-black"
                            type="submit"
                            id="button-addon2"
                        >

                            <i className="fa-regular fa-nfc-magnifying-glass h-5 w-5"></i>
                        </button>
                    </form>
                    <div>



                    </div>
                </nav>

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
