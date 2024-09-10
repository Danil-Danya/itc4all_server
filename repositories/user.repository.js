import UserModel from '../models/user.model.js';
import ApiError from '../exeptions/api.error.js';

const attributes = { exclude: ['password'] };

const createUsers = async (email, password, active_link) => {
    const newUser = await UserModel.create({ email, password, is_active: false, active_link });

    if (!newUser) {
        return ApiError.BadRequest('The user is not created');
    }

    return newUser;
}

const getAllUsers = async (pagination, where={}, include=[]) => {
    const { limit, offset } = pagination;

    const users = await UserModel.findAndCountAll({ limit, offset, distinct: true, include, where, attributes });

    if (!users) {
        return ApiError.BadRequest('The users are not defined');
    }

    return users;
}

const getOneUser = async (where) => {
    if (!where) {
        return ApiError.BadRequest('Where parameter must not be null or undefined');
    }

    const user = await UserModel.findOne({ where });

    if (!user) {
        return ApiError.BadRequest('The user is not defined');
    }

    return user;
}

const editeUser = async (id, editeData) => {
    if (!id || !editeData) {
        return ApiError.BadRequest('Id and editeData parameter must not be null or undefined');
    }

    const user = await UserModel.findOne({ where: { id } });
    if (!user) {
        return ApiError.BadRequest('The user is not defined');
    }

    Object.keys(editeData).forEach((key) => {
        if (user[key] !== undefined) {
            user[key] = editeData[key];
        }
    });

    await user.save();
}

const updateUser = async (id, data) => {
    if (!id || !editeData) {
        return ApiError.BadRequest('Id and editeData parameter must not be null or undefined');
    }

    const user = await UserModel.findOne({ where: { id } });
    if (!user) {
        return ApiError.BadRequest('User not found');
    }

    await user.update(newUserData);
    return user;
}

const deleteUser = async (id, include=[]) => {
    const user = await UserModel.findOne({ where: { id } }, include);
    if (!user) {
        return ApiError.BadRequest('User not found');
    }

    const deletedUser = UserModel.destroy({ where: { id } });
    return deletedUser;
}

export { 
    createUsers, 
    getAllUsers, 
    getOneUser, 
    editeUser, 
    updateUser, 
    deleteUser 
};