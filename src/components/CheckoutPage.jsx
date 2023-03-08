import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_stripe_public_key_here');

const CheckoutPage = () => {
  const handleClick = async (event) => {
    event.preventDefault();
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      lineItems: [{ price: 'price_12345', quantity: 1 }],
      mode: 'payment',
      successUrl: 'https://your-website.com/success',
      cancelUrl: 'https://your-website.com/cancel',
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
