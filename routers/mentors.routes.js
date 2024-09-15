import MentorController from "../controllers/mentor.controller.js";
import jwt from "../middlewares/jwt.middleware.js";

import { Router } from "express";

const router = Router();

router.post('/mentors', jwt, MentorController.createMentor);
router.delete('/mentors', jwt, MentorController.deleteMentor);
router.put('/mentors/:id', jwt, MentorController.editeMentor);
router.patch('/mentors/:id', jwt, MentorController.updateMentor);
router.get('/mentors', MentorController.getAllMentros);
router.get('/mentors/:id', MentorController.getOneMentor);

export default router;