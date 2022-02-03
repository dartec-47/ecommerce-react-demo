import { useState, createContext } from 'react'

const initialState = [];

const CartContext = createContext(initialState);



const CartProvider = props => {
    const [cart, setCart] = useState(initialState)
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}