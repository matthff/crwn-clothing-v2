import {
    CartItemContainer,
    ItemDetails
} from './cart-item.styles';

import { CartItemType } from '../cart-dropdown/cart-dropdown.component'

type CartItemProps = {
    cartItem: CartItemType
}

const CartItem = ({cartItem} : CartItemProps) => {
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
