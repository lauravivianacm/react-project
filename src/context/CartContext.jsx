import { createContext, useState, useEffect } from "react";
export const cartContext = createContext();

const CartContext = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, quantity) => {
        let newItem;
        let product = isInCart(item.id);
        if (product) {
            product.quantity += quantity;
            newItem = [...cartItems];
        } else {
            product = {...item, quantity: quantity};
            newItem = [...cartItems, product];
        }
        setCartItems(newItem);
        console.log(cartItems);
    }

    const isInCart = (idItem) => {
        let items = [...cartItems];
        let item = items.find(product => product.id === idItem);
        return item;
    }

    const removeItem = () => {

    }

    const clear = () => {
        
    }

    return (
        <cartContext.Provider value={{cartItems, setCartItems, addItem}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContext