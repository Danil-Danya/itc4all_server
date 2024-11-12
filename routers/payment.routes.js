import { Router } from "express";
import error from "../middlewares/error.middleware.js";

import mernchat from '../middlewares/paymeToken.middleware.js';
import paymentController from "../controllers/payment.controller.js";

const router = Router();

router.post('/trasactions/payment/payme', mernchat, paymentController.payme, error);

export default router;