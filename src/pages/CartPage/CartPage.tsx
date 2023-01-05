import React from 'react'
import { useReadLocalStorage } from 'usehooks-ts'
import { TStoreProducts } from '../../state/state'
function CartPage() {
    const cartItemsLocal = useReadLocalStorage<TStoreProducts[]>('storedSelectedItems')
    return (
        <body className="bg-[#eadfcb] flex flex-col justify-center items-center h-screen gap-10">
            <table className="shadow-2xl font-[Poppins] border-2 border-cyan-200 w-6/12">
                <thead className="text-white">
                    <tr className="bg-cyan-500 cursor-pointer duration-300">
                        <th className="py-3 bg-cyan-800">S.NO</th>
                        <th className="py-3 bg-cyan-800">Name</th>
                        <th className="py-3 bg-cyan-800">Amount</th>
                        <th className="py-3 bg-cyan-800">Price</th>

                    </tr>

                </thead>
                <tbody className="text-cyan-900 text-center">
                    {cartItemsLocal?.map((item, index) => {
                        return (<tr className="bg-[#f4e9d6] cursor-pointer duration-3 " key={index}>
                            <td className="py-3 px-6">1</td>
                            <td className="py-3 px-6">{item.name}</td>
                            <td className="py-3 px-6">{item.quantity}</td>
                            <td className="py-3 px-6">{item.name} * {item.price}</td>
                        </tr>)
                    })


                    }


                </tbody>
            </table>
            <div className="shadow-2xl font-[Poppins] border-2 border-cyan-200 w-6/12 bg-orange-800">
                <span className="mr-3  text-white">Total Price:  {cartItemsLocal?.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue.quantity * currentValue.price;
                }, 0)}
                </span>
            </div>
            <button className="flex justify-center rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" > THANH TOÁN</button>
        </body>
    )
}

export default CartPage
