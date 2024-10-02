import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";

import jwt from "../middlewares/jwt.middleware.js";

const router = Router();

router.get('/profile', jwt, AuthController.profile);
router.post('/login', AuthController.login);
router.post('/registration', AuthController.registraion);
router.get('/user/active-account/:active_link', AuthController.activate);

export default router;