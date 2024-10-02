import { createUsers, getOneUser, editeUser } from "../repositories/user.repository.js";
import { createProfile } from "../repositories/profile.repository.js";
import { getProfile } from "../repositories/profile.repository.js";

import jsonwebtockenService from "./jsonwebtocken.service.js";
import emailService from "./email.service.js";

import ApiError from "../exeptions/api.error.js";
import UserDTO from "../dto/user.dto.js";

import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';  


class AuthorisationService {
    async registration (email, password, firstName, lastName) {
        const candidate = await getOneUser({ email });
        if (candidate) {
            throw ApiError.BadRequest('This user alrady created');
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const activationLink = await uuidv4();   

        let newUser = await createUsers(email, hashPassword, activationLink);
        const userProfile = await createProfile(firstName, lastName);

        if (!newUser || !userProfile) {
            throw ApiError.BadRequest('This user does not be created');
        }

        user.password = null;

        const sendEmail = await emailService.sendActivationMail(newUser.email, `${process.env.SERVER_VERIFY_LINK }/${activationLink}`);

        const payload = new UserDTO(newUser);
        const tocken = jsonwebtockenService.generateTockens({ ...payload });

        return  { ...tocken, newUser, userProfile };
    }

    async login (email, password) {
        if (!email || !password) {
            throw ApiError.BadRequest('The fields password or email is required');
        }

        const user = await getOneUser({ email });
        if (!user || !user.is_active) {
            throw ApiError.UnauthorizedError('This user is not defined');
        }
        
        const isUserCheckedPassword = await bcrypt.compareSync(password, user.password);
        if (!isUserCheckedPassword) {
            throw ApiError.UnauthorizedError('Email or password is wrong');
        }

        const payload = new UserDTO(user);
        const jsonwebtocken = jsonwebtockenService.generateTockens({ ...payload })
        return {
            ...jsonwebtocken
        }
    }

    async profile (_profile) {
        if (!_profile) {
            throw ApiError.BadRequest('Parametr profile is required');
        }

        const profile = await getProfile(_profile.id);
        return profile;
    }

    async active (activationLink) {
        if (!activationLink) {
            throw ApiError.BadRequest('Parametr activation_link is required');
        }

        const user = await getOneUser({ activation_link: activationLink });
        if (user.activation_link !== activationLink) {
            throw ApiError.BadRequest('These activation data are not correct');
        }

        if (user.is_active) {
            throw ApiError.BadRequest('This user has been verified');
        }

        const verifyUser = await editeUser(user.id, { is_active: true });
        if (!verifyUser) {
            throw ApiError.BadRequest('Unexpected verification error');
        }

        return process.env.CLIENT_VERIFY_LINK;
    }
}

export default new AuthorisationService();