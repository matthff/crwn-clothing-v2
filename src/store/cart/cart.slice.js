import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
    isCartOpen: false,
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITAL_STATE,
    reducers: {
        setCartItems(state, action) {
            const { payload } = action;
            state.cartItems = payload;
        },
        addItemToCart(state, action) {
            const { payload } = action;
            state.cartItems = addCartItem(state.cartItems, payload)
        },
        removeItemFromCart(state, action) {
            const { payload } = action;
            state.cartItems = removeCartItem(state.cartItems, payload)
        },
        clearItemFromCart(state, action) {
            const { payload } = action;
            state.cartItems = clearCartItem(state.cartItems, payload)
        },
        setIsCartOpen(state, action) {
            const { payload } = action;
            state.isCartOpen = payload;
        }
    }
});

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
};

const clearCartItem = (cartItems, cartItemToClear) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToClear.id);

    if(existingCartItem)
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}

export const { 
    setCartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
