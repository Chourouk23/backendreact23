const express = require('express');
const router = express.Router();
const stripe = require('stripe');
const Stripe = stripe('sk_test_51NXU2lKiGljqQsD5ASCrfvuJ0dosWpUg1YfrGaXz0f0UxlJGvSM2ek4h9KnZqbv63AwcAszw69ivLcmoZghbBr8400AIzmB5O2');
router.post('/', async (req, res) => {
    console.log(req.body)
    let status, error;
    const { token, amount } = req.body;
  
    try {
        await Stripe.charges.create({
            source: token.id,
            amount,
            currency: 'usd',
        });
        status = 'success';
    } catch (error) {
        console.log(error);
        status = 'Failure';
    }
    res.json({ error, status });
});
module.exports = router;