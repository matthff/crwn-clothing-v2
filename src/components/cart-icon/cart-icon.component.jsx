import { useDispatch, useSelector } from 'react-redux/es/exports';

import { selectIsCartOpen, selectCartItemAmount } from '../../store/cart/cart.selector';

import { setIsCartOpen } from '../../store/cart/cart.slice.js';

import {
    CartIconContainer,
    ShoppingIcon,
    ItemCount
} from './cart-icon.styles.jsx';

const CartIcon = () => {
    const dispatch = useDispatch();

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartItemAmount = useSelector(selectCartItemAmount);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartItemAmount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;
