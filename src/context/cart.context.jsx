import { createContext, useEffect, useState } from "react";

const addCardItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartItemAmount: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemAmount, setCartItemAmount] = useState(0);

    useEffect(() => {
        const count = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartItemAmount(count);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCardItem(cartItems, productToAdd));
    };

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartItemAmount};
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>;
}
