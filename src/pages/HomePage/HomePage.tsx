import React from 'react'
import { Link } from "react-router-dom"
function HomePage() {
    return (
        <header>
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
        </header>
    )
}

export default HomePage