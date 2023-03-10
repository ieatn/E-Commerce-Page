import React from 'react';
// npm i @stripe/stripe-js
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './Navbar';




// stripe test mode publish key
const stripePromise = loadStripe('pk_test_1s5WylQ8DGGaYBscy5k5L1Lc00v0yymxZW');

const CheckoutPage = () => {
  const handleClick = async (event) => {
    event.preventDefault();
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      // create a product in stripe test products, copy the id into price:
      lineItems: [{ price: 'price_1MjYIrFJJLeNOb5qceSUUiws', quantity: 1 }],
      mode: 'payment',
      // app url/success and /cancel
      successUrl: 'https://e-commerce-page-j8wxrs5gk-ieatn.vercel.app/success',
      cancelUrl: 'https://e-commerce-page-j8wxrs5gk-ieatn.vercel.app/cancel',
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className='container mx-auto flex items-center justify-center'>
        <button className='w-full bg-orange-400 font-bold text-white rounded-md' onClick={handleClick}>Checkout</button>
      </div>
    </>
    
  );
};

export default CheckoutPage;
