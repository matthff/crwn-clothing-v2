import { useAppDispatch } from '../../store/hooks';

import { addItemToCart, removeItemFromCart, clearItemFromCart  } from '../../store/cart/cart.slice';
import { CartItemType } from '../cart-dropdown/cart-dropdown.component.js';

import {
    CheckoutItemContainer,
    ImageContainer,
    Quantity
} from './checkout-item.styles';

type CheckoutItemProps = {
    cartItem: CartItemType
}

const CheckoutItem = ({cartItem}: CheckoutItemProps) => {
    const dispatch = useAppDispatch();
    const { name, imageUrl, quantity, price} = cartItem;

    const addProductHandler = () => dispatch(addItemToCart(cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
    
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <span className='name'>{name}</span>
            <Quantity>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addProductHandler}>&#10095;</div>
            </Quantity>
            <span className='price'>{price}</span>
            
            
            <span className='remove-button' onClick={clearItemHandler}>&#10005;</span>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;
