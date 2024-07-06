const express = require('express');
const stripe = require('stripe')
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.post('/api/payment_intents', async (req, res) => {
    try {
      const { amount } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
      });
      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });