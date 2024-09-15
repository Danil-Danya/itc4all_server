import authRouter from './auth.routes.js';
import mentorRouter from './mentors.routes.js';

import { Router } from "express";

const router = Router();

router.use(authRouter);
router.use(mentorRouter);

export default router;