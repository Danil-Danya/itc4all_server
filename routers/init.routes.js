import authRouter from './auth.routes.js';
import mentorRouter from './mentors.routes.js';
import transactionsRouter from './transactions.routes.js';
import requestRouter from './request.routes.js';
import paymentRouter from './payment.routes.js';
import zoomSessionRouter from './zoomSesssion.routes.js';
import courseRouter from './course.routes.js';
import eventRouter from './event.routes.js';
import videoRouter from './videos.routes.js';

import { Router } from "express";

const router = Router();

router.use(authRouter);
router.use(mentorRouter);
router.use(transactionsRouter);
router.use(requestRouter);
router.use(paymentRouter);
router.use(zoomSessionRouter);
router.use(courseRouter);
router.use(eventRouter);
router.use(videoRouter)

export default router;