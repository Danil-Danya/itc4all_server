import { Router } from "express";

import CourseController from "../controllers/course.controller.js";
import CourseCategoriesController from "../controllers/courseCategories.controller.js";

import jwt from "../middlewares/jwt.middleware.js";
import error from "../middlewares/error.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const router = Router();

router.get('/courses', CourseController.getAllCourse, error);
router.get('/courses/:id', CourseController.getOneCourse, error);
router.get('/course-category', CourseCategoriesController.getOneCourseCategory);
router.get('/course-categories', CourseCategoriesController.getAllCourseCategory);

router.post('/courses', jwt, upload.single('file'), CourseController.createCourse, error);
router.post('/course-category', jwt, CourseCategoriesController.createCourseCategory);

router.delete('/courses', jwt, CourseController.deleteCourse, error);
router.delete('/course-category/:id', jwt, CourseCategoriesController.deleteCourseCategory);

router.put('/course-category/:id', jwt, CourseCategoriesController.updateCourseCategory);
router.patch('/course-category/:id', jwt, CourseCategoriesController.editeCourseCategory);
router.put('/courses', jwt, CourseController.updateCourse, error);
router.patch('/courses', jwt, CourseController.editeCourse, error);

export default router;