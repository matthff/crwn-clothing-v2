import { useDispatch } from 'react-redux/es/exports';

import { addItemToCart, removeItemFromCart, clearItemFromCart  } from '../../store/cart/cart.slice.js';

import {
    CheckoutItemContainer,
    ImageContainer,
    Quantity
} from './checkout-item.styles.jsx';

const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch();
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
