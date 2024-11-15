import { Router } from "express";

import jwt from '../middlewares/jwt.middleware.js';
import error from '../middlewares/error.middleware.js';

import ZoomSessionsController from "../controllers/zoomSessions.controller.js";
import ZoomAuthController from "../controllers/zoomAuth.controller.js";

const router = Router();

router.post('/zoom-sessions', jwt, ZoomSessionsController.createZoomSessions, error);
router.delete('/zoom-sessions/:id', jwt, ZoomSessionsController.deleteZoomSessions);
router.get('/zoom-sessions', ZoomSessionsController.getAllZoomSessions);
router.get('/zoom-sessions/:id', ZoomSessionsController.getOneZoomSessions);


//auth zomm sessions
router.get('/zoom-sessions/auth', ZoomAuthController.authToZoomSessionsApi, error);
router.get('/zoom-sdk/signature', ZoomAuthController.signatureToZoomSDKApi);
router.get('/zoom-sdk/zak-token', ZoomAuthController.ZAKZommTokenToSDKApi);

export default router;