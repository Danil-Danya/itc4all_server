import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";

const router = Router();

router.get('/profile', AuthController.profile);
router.post('/login', AuthController.login);
router.post('/registration', AuthController.registraion);
router.get('/user/active-account/:active_link', AuthController.activate);

export default router;