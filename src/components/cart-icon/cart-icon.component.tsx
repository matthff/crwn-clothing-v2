import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { selectIsCartOpen, selectCartItemAmount } from '../../store/cart/cart.selector';

import { setIsCartOpen } from '../../store/cart/cart.slice';

import {
    CartIconContainer,
    ShoppingIcon,
    ItemCount
} from './cart-icon.styles';

const CartIcon = () => {
    const dispatch = useAppDispatch();

    const isCartOpen: boolean = useAppSelector(selectIsCartOpen);
    const cartItemAmount: number = useAppSelector(selectCartItemAmount);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartItemAmount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;
