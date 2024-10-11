import { Router } from "express";

import jwt from '../middlewares/jwt.middleware.js';
import error from '../middlewares/error.middleware.js';
import upload from "../middlewares/upload.middleware.js";

import VideosController from "../controllers/videos.controller.js";

const router = Router();

router.post('/videos/:course_id', jwt, upload.single('file'), VideosController.createVideo, error);
router.get('/videos/:id', jwt, VideosController.getOneVideo, error);

export default router;