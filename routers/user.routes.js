import error from '../middlewares/error.middleware.js';
import upload from '../middlewares/upload.middleware.js';
import jwt from '../middlewares/jwt.middleware.js';

import UserController from '../controllers/user.controler.js';
import UserAliasController from '../controllers/userAlias.controller.js';

import { Router } from 'express';

const router = Router();

router.get('/users/:id', jwt, UserController.getOneUser, error);
router.get('/users', jwt, UserController.getAllUser, error);

router.put('/users', jwt, UserController.updateUser, error);
router.patch('/users', jwt, UserController.editeUser, error);

router.delete('/users/:id', jwt, UserController.deleteUser, error);


router.patch('/user-edit-profile/:id', jwt, UserAliasController.editeUserProfile, error);
router.patch('/user-edited-avatar/:id', jwt, upload.single('file'), UserAliasController.editeUserAvatar, error);


export default router;