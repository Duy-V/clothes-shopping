import { useParams } from 'react-router-dom';
import { useState, useContext } from 'react';
import { TStoreProducts } from "../../state/state"
import { ProductsContext } from "../../state/context"
import { addProduct } from '../../state/reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import useLocalStorage from '../../useLocalStorage';
function DetailedProduct() {
    const { state, dispatch } = useContext(ProductsContext)
    let [cartItems, setCartItems] = useLocalStorage<TStoreProducts[]>("storedSelectedItems", []);
    let { id } = useParams();
    let [numOfSelectedProduct, setNumOfSelectedProduct] = useState<number>(0)
    //them "quantity" bằng cách này thì localStorage không cập nhật.
    // state.products.map((newProduct: TStoreProducts) => {
    //     newProduct["quantity"] = 0

    // })
    // còn thêm như bên dưới thì có 1 vấn đề, cái click đầu tiền nó không ăn quantity
    console.log(state.products)
    const handleAdd = (product: TStoreProducts) => {
        console.log('duy hi', state, product)
        let index = cartItems.findIndex(function (item) {
            return item.id === product.id;
        });

        if (index > -1) {
            let newCartItems = cartItems.map((cartItem) => {

                return cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            })
            setCartItems(newCartItems)
        } else {

            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }

    }

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
