import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import User from "../models/users.js";

import stripe from ("stripe", process.env.STRIPE_SECRET_KEY);

export const processPayment = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findById(req.user.id);

    const myPayment = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "inr",
        metadata: {
            company: "LetsLearn",
            user: user,
        },
    });

    res.status(200).json({ success: true, client_secret: myPayment.client_secret });
});


export const sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {

    res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });

});