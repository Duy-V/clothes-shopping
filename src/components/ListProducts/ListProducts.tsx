import React from 'react'
import { useState, useContext } from 'react';
import Product from "../Product/Product"
import { ProductsContext } from "../../state/context"

// C:\Users\DUY VO\Desktop\react-prj\shopping-web\vite-project\src\assets\imgs\banner1.jpg
function ListProducts() {
    const { state } = useContext(ProductsContext)
    console.log(state)
    // const data = [
    //     {
    //         name: 'Free Shirt',
    //         slug: 'free-shirt',
    //         category: 'Shirts',
    //         image: '/src/assets/imgs/shirt1.jpg',
    //         price: 70,
    //         brand: 'Nike',
    //         rating: 4.5,
    //         numReviews: 8,
    //         countInStock: 20,
    //         description: 'A popular shirt',
    //         isFeatured: true,
    //         banner: '/src/assets/imgs/banner1.jpg',
    //         id: 1
    //     },
    //     {
    //         name: 'Fit Shirt',
    //         slug: 'fit-shirt',
    //         category: 'Shirts',
    //         image: '/src/assets/imgs/shirt2.jpg',
    //         price: 80,
    //         brand: 'Adidas',
    //         rating: 3.2,
    //         numReviews: 10,
    //         countInStock: 20,
    //         description: 'A popular shirt',
    //         isFeatured: true,
    //         banner: '/src/assets/imgs/banner2.jpg',
    //         id: 2
    //     },
    //     {
    //         name: 'Slim Shirt',
    //         slug: 'slim-shirt',
    //         category: 'Shirts',
    //         image: '/src/assets/imgs/shirt3.jpg',
    //         price: 90,
    //         brand: 'Raymond',
    //         rating: 4.5,
    //         numReviews: 3,
    //         countInStock: 20,
    //         description: 'A popular shirt',
    //         id: 3
    //     },
    //     {
    //         name: 'Golf Pants',
    //         slug: 'golf-pants',
    //         category: 'Pants',
    //         image: '/src/assets/imgs/pants1.jpg',
    //         price: 90,
    //         brand: 'Oliver',
    //         rating: 2.9,
    //         numReviews: 13,
    //         countInStock: 20,
    //         description: 'Smart looking pants',
    //         id: 4
    //     },
    //     {
    //         name: 'Fit Pants',
    //         slug: 'fit-pants',
    //         category: 'Pants',
    //         image: '/src/assets/imgs/pants2.jpg',
    //         price: 95,
    //         brand: 'Zara',
    //         rating: 3.5,
    //         numReviews: 7,
    //         countInStock: 20,
    //         description: 'A popular pants',
    //         id: 5
    //     },
    //     {
    //         name: 'Classic Pants',
    //         slug: 'classic-pants',
    //         category: 'Pants',
    //         image: '/src/assets/imgs/pants3.jpg',
    //         price: 75,
    //         brand: 'Casely',
    //         rating: 2.4,
    //         numReviews: 14,
    //         countInStock: 20,
    //         description: 'A popular pants',
    //         id: 6,
    //     },

    // ];
    // const [products, setProducts] = useState<TProduct[]>([...data])
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
