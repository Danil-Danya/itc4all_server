import MentorController from "../controllers/mentor.controller.js";
import MentorSocialController from "../controllers/mentorSocialController.js";

import jwt from "../middlewares/jwt.middleware.js";
import upload from "../middlewares/upload.middleware.js";

import { Router } from "express";

const router = Router();

router.post('/mentors', jwt, upload.single('image'), MentorController.createMentor);
router.delete('/mentors/:id', jwt, MentorController.deleteMentor);

router.put('/mentors/social/:id', jwt, MentorSocialController.updateSocial);
router.put('/mentors/:id', jwt, MentorController.editeMentor);

router.patch('/mentors/social/:id', jwt, MentorSocialController.editeSocial);
router.patch('/mentors/:id', jwt, MentorController.updateMentor);

router.get('/mentors', MentorController.getAllMentros);
router.get('/mentors/:id', MentorController.getOneMentor);

export default router;