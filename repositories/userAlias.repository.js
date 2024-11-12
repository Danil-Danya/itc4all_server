import ApiError from "../exeptions/api.error.js";

import ProfilesModel from "../models/profile.model.js";
import AvatarsModel from "../models/avatar.model.js";

const editeUserAvatar = async (id, data) => {
    if (!id || !data) {
        return ApiError.BadRequest('Id and editeData parameter must not be null or undefined');
    }

    const avatar = await AvatarsModel.findOne({ where: { id } });
    if (!avatar) {
        return ApiError.BadRequest('The avatar is not defined');
    }

    Object.keys(data).forEach((key) => {
        if (avatar[key] !== undefined) {
            avatar[key] = data[key];
        }
    });

    await avatar.save();
    return avatar;
}

const createUserAvatar = async (path, avatar_id) => {
    const newAvatar = AvatarsModel.create({ path, avatar_id });
    if (!newAvatar) {
        throw ApiError.BadRequest('User avatar does not be created!');
    }

    return newAvatar;
}

const getUserAvatar = async (avatar_id) => {
    const avatar = await AvatarsModel.findOne({ where: { avatar_id } });
    return avatar;
}

const editeUserProfile = async (id, data) => {
    if (!id || !data) {
        return ApiError.BadRequest('Id and editeData parameter must not be null or undefined');
    }

    const profile = await ProfilesModel.findOne({ where: { id } });
    if (!profile) {
        return ApiError.BadRequest('The profile is not defined');
    }

    Object.keys(data).forEach((key) => {
        if (profile[key] !== undefined) {
            profile[key] = data[key];
        }
    });

    await profile.save();
    return profile;
}

export {
    editeUserAvatar,
    editeUserProfile,
    createUserAvatar,
    getUserAvatar
}