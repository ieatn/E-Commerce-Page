import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_1s5WylQ8DGGaYBscy5k5L1Lc00v0yymxZW');

const CheckoutPage = () => {
  const handleClick = async (event) => {
    event.preventDefault();
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      lineItems: [{ price: 'price_1MjYIrFJJLeNOb5qceSUUiws', quantity: 1 }],
      mode: 'payment',
      successUrl: 'http://127.0.0.1:5173/success',
      cancelUrl: 'http://127.0.0.1:5173/cancel',
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div>
      <button className='container mx-auto flex items-center justify-center bg-orange-400 font-bold text-white rounded-md' onClick={handleClick}>Checkout</button>
    </div>
  );
};

export default CheckoutPage;
