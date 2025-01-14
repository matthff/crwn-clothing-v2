import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

import { selectCartItems } from '../../store/cart/cart.selector';

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage
} from './cart-dropdown.styles';

export type CartItemType = {
    id: number
    name : string, 
    price: number, 
    imageUrl: string, 
    quantity: number
}

const CartDropdown = () => {
    const cartItems: CartItemType[] = useAppSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? 
                    (cartItems.map((item => <CartItem key={item.id} cartItem={item}/>))) : 
                    (<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;
