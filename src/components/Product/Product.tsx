import React from 'react'
import { TStoreProducts } from '../../state/state'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { useLocalStorage } from 'usehooks-ts';
import useCart from '../../useCart';
//relative path, absolute Path
type Props = {
    product: TStoreProducts,
}
function Product({ product }: Props) {
    const navigate = useNavigate();
    const handleSelectedItem = (id?: number | string) => {
        navigate(`/list-products/${id}`)
    }

    const { cartItems, setCartItems, handleAdd } = useCart()

    return (
        <div >
            <img src={`${product.image}`} alt="Girl in a jacket" width="300" height="400" />
            <div className="flex flex-col">
                <div className="flex flex-col items-center mb-3" onClick={() => handleSelectedItem(product.id)}>
                    <h4>{product.name}</h4>
                    <h4>{product.brand}</h4>
                    <div className="flex ">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="mr-30" />
                        <h4>{product.price}</h4>
                    </div>
                    <h4><FontAwesomeIcon icon={faStore} />{product.countInStock}</h4>

                </div>

                <button className="flex justify-center rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" onClick={() => handleAdd(product)}> <FontAwesomeIcon icon={faCartPlus} /></button>
            </div>


        </div >
    )
}

export default Product
