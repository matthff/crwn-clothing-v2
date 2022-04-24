import { useContext } from 'react';

import {
    CheckoutItemContainer,
    ImageContainer,
    Quantity
} from './checkout-item.styles.jsx';

import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, quantity, price} = cartItem;

    const { 
        addItemToCart, 
        removeItemFromCart,
        clearItemFromCart } = useContext(CartContext);

    const addProductHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)
    const clearItemHandler = () => clearItemFromCart(cartItem)
    
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
