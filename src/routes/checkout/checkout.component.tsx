import { useAppSelector } from '../../store/hooks';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import PaymentForm from '../../components/payment-form/payment-form-component';

import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock
} from './checkout.styles';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const cartItems = useAppSelector(selectCartItems);
    const cartTotal = useAppSelector(selectCartTotal);
    
    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span> 
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <span className='total'>Total: ${cartTotal}</span>
            <PaymentForm></PaymentForm>
        </CheckoutContainer>
    )
}

export default Checkout;
