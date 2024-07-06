import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useSpring, animated } from 'react-spring';

const stripePromise = loadStripe('');

const Checkout = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const handlePayment = async (paymentMethodId, amount) => {
    try {
      const response = await fetch('/api/payment_intents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, payment_method_id: paymentMethodId }),
      });
      return await response.json();
    } catch (err) {
      return { error: { message: err.message } };
    }
  };

  let x = 100;

  return (
    <animated.div style={props}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>Checkout</Typography>
        <Elements stripe={stripePromise}>
          <CheckoutForm amount={x} handlePayment={handlePayment} />
        </Elements>
      </Container>
    </animated.div>
  );
};

export default Checkout;
