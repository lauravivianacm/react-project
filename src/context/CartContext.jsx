import { createContext, useState, useEffect } from "react";
export const cartContext = createContext();

const CartContext = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartWidgetValue, setCartWidgetValue] = useState(0);
    const [cartTotalValue, setCartTotalValue] = useState(0);

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
    }

    const isInCart = (idItem) => {
        let items = [...cartItems];
        let item = items.find(product => product.id === idItem);
        return item;
    }

    const updateQuantityItem = (idItem, quantity) => {
        let newItem;
        let product = isInCart(idItem);
        if (product) {
            product.quantity = quantity;
            newItem = [...cartItems];
            setCartItems(newItem);
        }
    }

    const removeItem = (idItem) => {
        const newCartItems = cartItems.filter(product => {
            return product.id !== idItem;
        });
        setCartItems(newCartItems);
    }

    const clear = () => {
        setCartItems([]);
    }

    const getCartTotals = () => {
        let totalWidget = 0;
        let totalCart = 0;
        for(let i=0; i < cartItems.length; i++){
            totalWidget += cartItems[i].quantity;
            totalCart += cartItems[i].quantity * cartItems[i].precio;
        }
        setCartWidgetValue(totalWidget);
        setCartTotalValue(totalCart);
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setCartItems(items);
        }
    }, []);

    useEffect(() => {
        getCartTotals();
        localStorage.setItem('items', JSON.stringify(cartItems));
    },[cartItems])

    return (
        <cartContext.Provider value={{
            cartItems, 
            setCartItems, 
            addItem, 
            removeItem, 
            clear, 
            updateQuantityItem,
            cartWidgetValue,
            cartTotalValue
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContext