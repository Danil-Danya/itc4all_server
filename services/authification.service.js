import { createUsers, getOneUser } from "../repositories/user.repository";
import ApiError from "../exeptions/api.error";
import jsonwebtockenService from "./jsonwebtocken.service";
import bcrypt from "bcrypt";
import uuid from 'uuid';
import UserDTO from "../dto/user.dto";
import { getProfile } from "../repositories/profile.repository";

class AuthorisationService {
    async registration (email, password, firstName, lastName) {
        const candidate = await getOneUser({ email });
        if (candidate) {
            return ApiError.BadRequest('This user alrady created');
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const activationLink = uuid.v4();

        const newUser = await createUsers(email, hashPassword, activationLink);
        const userProfile = await createUsersProfiles(firstName, lastName);

        if (!newUser || !userProfile) {
            return ApiError.BadRequest('This user does not be created');
        }

        const payload = new UserDTO(newUser);
        const tocken = jsonwebtockenService.generateTockens({ ...payload });

        return  { ...tocken, newUser, userProfile };
    }

    async login (email, password) {
        if (!email || !password) {
            return ApiError.BadRequest('The fields password or email is required');
        }

        const user = await getOneUser({ email });
        if (!user) {
            return ApiError.UnauthorizedError('This user is not defined');
        }

        const isUserCheckedPassword = await bcrypt.compareSync(password, user.password);
        if (!isUserCheckedPassword) {
            return ApiError.UnauthorizedError('Email or password is wrong');
        }

        const jsonwebtoken = new UserDTO({ ...user });
        return {
            ...jsonwebtoken
        }
    }

    async profile (_profile) {
        if (!profile) {
            return ApiError.BadRequest('Parametr ptrofile is required');
        }

        const profile = await getProfile(_profile.id);
        return profile;
    }

    async active (user) {
        
    }
}

export default new AuthorisationService();