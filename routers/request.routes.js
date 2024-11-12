import RequestController from "../controllers/request.controller.js";

import jwt from "../middlewares/jwt.middleware.js";

import { Router } from "express";

const router = Router();

router.post('/request', RequestController.sendRequest);
router.get('/request/:id', jwt, RequestController.getRequest);
router.get('/request', jwt, RequestController.getAllRequests);
router.delete('/request/:id', jwt, RequestController.deleteRequest);


export default router;