import { Router } from "express";

import jwt from '../middlewares/jwt.middleware.js';
import transactionController from "../controllers/transaction.controller.js";

const router = Router();

router.get('transactions/:id', jwt, transactionController.getOneTransaction);
router.get('transactions/', jwt, transactionController.getAllTransaction);

router.delete('transactions/:id', jwt, transactionController.deleteTransaction);

router.put('transactions/:id', jwt, transactionController.updateTransaction);
router.patch('transactions/:id', jwt, transactionController.editeTransaction);

export default router;