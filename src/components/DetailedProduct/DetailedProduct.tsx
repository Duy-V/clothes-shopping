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
    const [selectedItems, setSelectedItems] = useLocalStorage<TStoreProducts[]>("storedSelectedItems", []);

    // must push id and the count of click which meaning add

    console.log(state)
    let { id } = useParams();
    let [numOfSelectedProduct, setNumOfSelectedProduct] = useState<number>(0)
    // const filterTheSameItem = (selectedItems: TStoreProducts[]) => {
    //     for (let i = 0; i < selectedItems.length; i++) {
    //         for (let j = 1; j < selectedItems.length; j++) {
    //             if (selectedItems[i].id == selectedItems[j].id) {
    //                 selectedItems.splice(selectedItems[i])
    //                 console.log("ddd")
    //             }
    //         }
    //     }
    // }
    const handleAdd = (product: TStoreProducts) => {
        console.log('duy hi', state, product.id)

        state.products.filter(p => p.id == product.id).map((selectedProduct: TStoreProducts) => {
            selectedProduct.countInStock = selectedProduct.countInStock - 1
            setSelectedItems([...selectedItems, product])

        })
        numOfSelectedProduct++
        setNumOfSelectedProduct(numOfSelectedProduct)
        dispatch(addProduct(product, numOfSelectedProduct));

    }

    // const addNote = (selectedItem: TStoreProducts) => {
    //     console.log(selectedItem)
    //     setselectedItems([...selectedItems, selectedItem])

    // }
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
