import { Router } from "express";

import ApiError from "../exeptions/api.error.js";
import EventsController from "../controllers/events.controller.js";

import jwt from '../middlewares/jwt.middleware.js';
import error from '../middlewares/error.middleware.js';
import upload from "../middlewares/upload.middleware.js";


const router = Router();

router.post('/events', jwt, upload.array('images'), EventsController.createEvent, error);

router.get('/events', EventsController.getAllEvents, error);
router.get('/event', EventsController.getOneEvent, error);

router.patch('/events/:id', jwt, upload.array('images'), EventsController.editeEvent, error);
router.put('/events/:id', jwt, upload.array('images'), EventsController.updateEvent, error);

router.delete('/events/:id', EventsController.deleteEvent, error);

export default router;