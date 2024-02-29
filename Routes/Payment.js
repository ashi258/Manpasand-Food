const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
require('dotenv').config();



const KEY_ID = process.env.KEY_ID;
const KEY_SECRET = process.env.KEY_SECRET;

const instance = new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET });

router.post("/payment", async (req, res) => {
    const { amount } = req.body;

    const options = {
        amount: amount * 100,  // amount in the smallest currency unit
        currency: "INR",
    };

    instance.orders.create(options, (err, order) => {
        if (err) {
            return res.status(500).json({ code: 500, message: 'Server Err.' });
        }

        res.status(201).json({
            code: 200,
            message: 'order created',
            data: order,
        });
    });
});

router.post("/verify", (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto.createHmac('sha256', KEY_SECRET)
        .update(body)
        .digest('hex');

    if (expectedSignature === razorpay_signature) {
        res.status(200).json({ code: 200, message: 'Sign Valid' });
    } else {
        res.status(500).json({ code: 500, message: 'Sign Invalid' });
    }
});

module.exports = router;
