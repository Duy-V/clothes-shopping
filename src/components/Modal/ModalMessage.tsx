import React, { useState } from 'react'
import "./Modal.css";
import { useReadLocalStorage, } from 'usehooks-ts';
import { TStoreProducts } from "../../state/state"
import useLocalStorage from '../../useLocalStorage';
import useCart from '../../useCart';
function ModalMessage() {

    const { isOpenModal, setIsOpenModal } = useCart()
    const handleClose = () => {
        setIsOpenModal(!isOpenModal)
    }
    console.log('duy Modal', isOpenModal)

    return (
        <div>
            {

                (isOpenModal) && (
                    <div className="modalBackground " >
                        <div className="modalContainer">
                            <div className="titleCloseBtn">
                                <button
                                    onClick={() => {
                                        handleClose()
                                    }}
                                >
                                    X
                                </button>
                            </div>
                            <div className="title">
                                <h1>Are You Sure You Want to Continue?</h1>
                            </div>
                            <div className="body">
                                <p>The next page looks amazing. Hope you want to go there!</p>
                            </div>
                            <div className="footer">

                                <button>Continue</button>
                            </div>
                        </div>
                    </div>
                )


            }








        </div>

    )
}

export default ModalMessage
