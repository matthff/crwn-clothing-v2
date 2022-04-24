import {
    CartItemContainer,
    ItemDetails
} from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
    const { name, price, imageUrl, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`product-${name}`}/>
            <ItemDetails>
                <h2 className='name'>{name}</h2>
                <span className='price'>{`${quantity} x $${price}`}</span>
            </ItemDetails>
        </CartItemContainer>
    );
}

export default CartItem;
