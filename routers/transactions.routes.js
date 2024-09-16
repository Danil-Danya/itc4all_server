import { Router } from "express";

import mernchat from '../middlewares/paymeToken.middleware.js';
import transactionController from "../controllers/transaction.controller.js";

const router = Router();

router.post('trasactions/payme', mernchat, transactionController.trasactionsPayme);

export default router;