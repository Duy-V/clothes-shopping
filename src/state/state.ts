export interface TProduct {
    products: TStoreProducts[],
    numOfSelectedProducts?: number,
    openCart: () => void,
  closeCart: () => void,
    getItemQuantity: (id: number) => number,
    increaseCartQuantity: (id: number) => void,
    decreaseCartQuantity: (id: number) => void,
    removeFromCart: (id: number) => void,
    lang: string,
    toggleColor: string
}
export interface TStoreProducts {
    name: string,
    slug: string,
    category: string,
    image: string,
    price: number,
    brand: string,
    rating: number,
    numReviews: number,
    countInStock: number,
    description: string,
    isFeatured?: boolean,
    banner?: string,
    id?: number|string,
    quantity: number
}

export const  initialState : TProduct ={
    products:  [
        {
            name: 'Free Shirt',
            slug: 'free-shirt',
            category: 'Shirts',
            image: '/src/assets/imgs/shirt1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt',
            isFeatured: true,
            banner: '/src/assets/imgs/banner1.jpg',
            id: 1,
            quantity: 0
            
        },
            
        
        {
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            category: 'Shirts',
            image: '/src/assets/imgs/shirt2.jpg',
            price: 80,
            brand: 'Adidas',
            rating: 3.2,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular shirt',
            isFeatured: true,
            banner: '/src/assets/imgs/banner2.jpg',
            id: 2,
        quantity: 0
        },
        {
            name: 'Slim Shirt',
            slug: 'slim-shirt',
            category: 'Shirts',
            image: '/src/assets/imgs/shirt3.jpg',
            price: 90,
            brand: 'Raymond',
            rating: 4.5,
            numReviews: 3,
            countInStock: 20,
            description: 'A popular shirt',
            id: 3,
            quantity: 0
        },
        {
            name: 'Golf Pants',
            slug: 'golf-pants',
            category: 'Pants',
            image: '/src/assets/imgs/pants1.jpg',
            price: 90,
            brand: 'Oliver',
            rating: 2.9,
            numReviews: 13,
            countInStock: 20,
            description: 'Smart looking pants',
            id: 4,
            quantity: 0
        },
        {
            name: 'Fit Pants',
            slug: 'fit-pants',
            category: 'Pants',
            image: '/src/assets/imgs/pants2.jpg',
            price: 95,
            brand: 'Zara',
            rating: 3.5,
            numReviews: 7,
            countInStock: 20,
            description: 'A popular pants',
            id: 5,
            quantity: 0
        },
        {
            name: 'Classic Pants',
            slug: 'classic-pants',
            category: 'Pants',
            image: '/src/assets/imgs/pants3.jpg',
            price: 75,
            brand: 'Casely',
            rating: 2.4,
            numReviews: 14,
            countInStock: 20,
            description: 'A popular pants',
            id: 6,
            quantity: 0
        },
        {
            name: 'Free Shirt',
            slug: 'free-shirt',
            category: 'Shirts',
            image: '/src/assets/imgs/shirt1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt',
            isFeatured: true,
            banner: '/src/assets/imgs/banner1.jpg',
            id: 7,
            quantity: 0
        },
    ],
    numOfSelectedProducts: 0,
    openCart: ()=> false,
    closeCart: ()=> true,
    getItemQuantity: (id: number) => 0,
    increaseCartQuantity: (id: number) => 0,
    decreaseCartQuantity: (id: number) => 0,
    removeFromCart: (id: number) => 0,
}