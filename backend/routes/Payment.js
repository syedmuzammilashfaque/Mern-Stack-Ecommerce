import express from "express";

import { processPayment } from "../controllers/Payment.js";

import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.route("payment/process").post(isAuthenticatedUser, processPayment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

export default router;