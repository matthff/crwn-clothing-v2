import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartItemType } from "../../components/cart-dropdown/cart-dropdown.component";
import type { Product } from "../../components/product-card/product-card.component";

type CartSliceState = {
    isCartOpen: boolean,
    cartItems: CartItemType[]
}

const initialState: CartSliceState = {
    isCartOpen: false,
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems(state: CartSliceState, action: PayloadAction<CartItemType[]>){
            const { payload } = action;
            state.cartItems = payload;
        },
        addItemToCart(state: CartSliceState, action: PayloadAction<Product>) {
            const { payload } = action;
            state.cartItems = addCartItem(state.cartItems, payload)
        },
        removeItemFromCart(state: CartSliceState, action: PayloadAction<CartItemType>) {
            const { payload } = action;
            state.cartItems = removeCartItem(state.cartItems, payload)
        },
        clearItemFromCart(state: CartSliceState, action: PayloadAction<CartItemType>) {
            const { payload } = action;
            state.cartItems = clearCartItem(state.cartItems, payload)
        },
        setIsCartOpen(state: CartSliceState, action: PayloadAction<boolean>) {
            const { payload } = action;
            state.isCartOpen = payload;
        }
    }
});

const addCartItem = (cartItems: CartItemType[], productToAdd: Product) => {
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItemType[], cartItemToRemove: CartItemType) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);

    if(existingCartItem && existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
};

const clearCartItem = (cartItems: CartItemType[], cartItemToClear: CartItemType) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToClear.id);

    if(existingCartItem)
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

    return cartItems;
}

export const { 
    setCartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
