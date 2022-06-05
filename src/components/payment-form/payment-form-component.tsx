import { FormEvent, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { CardElement , useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { BUTTON_STYLES_TYPES } from '../button/button.component';

import {
    PaymentFormContainer, 
    FormContainer,
    PaymentButton
} from './payment-form-styles';

const ifValidCardElement = (
    card: StripeCardElement | null
): card is StripeCardElement => card !== null;

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount: number = useAppSelector(selectCartTotal);
    const currentUser = useAppSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json());

        const {paymentIntent: { client_secret }} = response;

        const cardDetails = elements.getElement(CardElement);

        if(!ifValidCardElement(cardDetails)) return;

        console.log(client_secret);

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: cardDetails,
                billing_details: {
                    name: currentUser != null ? currentUser.displayName! : 'Guest',
                }
            }
        });

        setIsProcessingPayment(false);

        if(paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful');
            }
        }
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement></CardElement>
                <PaymentButton isLoading={isProcessingPayment} buttonStyle={BUTTON_STYLES_TYPES.inverted}>Pay now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    );
}

export default PaymentForm;
