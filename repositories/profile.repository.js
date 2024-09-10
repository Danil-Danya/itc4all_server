import UserModel from '../models/user.model';
import ProfileModel from '../models/profile.model';

import ApiError from '../exeptions/api.error';

const createProfile = async (first_name, last_name, user_id) => {
    if (!first_name || !last_name) {
        return ApiError.BadRequest('Field first_name and last_name is required');
    }

    const newProfile = await ProfileModel.create({first_name, last_name, user_id});
    if (!newProfile) {
        return ApiError.BadRequest('Profile could not be created');
    }

    return newProfile;
}
 
const editeProfile = async (id, profileData) => {
    const profile = await ProfileModel.findOne({ where: { id } });
    if (!profile) {
        return ApiError.BadRequest('Profile is not fined');
    }

    Object.keys(profileData).forEach((key) => {
        if (user[key] !== undefined) {
            user[key] = profileData[key];
        }
    });

    return profile;
}

const getProfile = async (id) => {
    const profile = await ProfileModel.findOne({ where: {id} });
    if (!profile) {
        return ApiError.BadRequest('User is not fined');
    }

    return profile;
}

export { createProfile, editeProfile, getProfile };