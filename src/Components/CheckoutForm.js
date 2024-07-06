// src/Components/CheckoutForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';

const CheckoutForm = ({ amount, handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      const { id } = paymentMethod;
      try {
        const result = await handlePayment(id, amount * 100);
        if (result.error) {
          setError(result.error.message);
          setLoading(false);
        } else {
          alert('Payment successful!');
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
  };

  return (
    <animated.form style={props} onSubmit={handleSubmit}>
      <CardElement />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Button type="submit" disabled={!stripe || loading} variant="contained" color="primary" style={{ marginTop: '10px' }}>
        {loading ? 'Processing...' : 'Pay Now'}
      </Button>
    </animated.form>
  );
};

export default CheckoutForm;
