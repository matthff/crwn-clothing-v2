import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import {
    CartIconContainer,
    ShoppingIcon,
    ItemCount
} from './cart-icon.styles.jsx';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItemAmount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartItemAmount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;
