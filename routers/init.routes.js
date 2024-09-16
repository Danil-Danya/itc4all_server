import authRouter from './auth.routes.js';
import mentorRouter from './mentors.routes.js';
import transactionsRouter from './transactions.routes.js';

import { Router } from "express";

const router = Router();

router.use(authRouter);
router.use(mentorRouter);
router.use(transactionsRouter);

export default router;