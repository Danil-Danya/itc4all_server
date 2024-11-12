import UserModel from '../models/user.model.js';
import ApiError from '../exeptions/api.error.js';

const attributes = { exclude: ['password'] };

const createUsers = async (email, password, activation_link) => {
    const newUser = await UserModel.create({ email, password, is_active: false, activation_link });

    if (!newUser) {
        throw ApiError.BadRequest('The user is not created');
    }

    return newUser;
}

const getAllUsers = async (pagination, where={}, include=[]) => {
    const { limit, offset } = pagination;

    const users = await UserModel.findAndCountAll({ limit, offset, distinct: true, include, where });

    if (!users) {
        return ApiError.BadRequest('The users are not defined');
    }

    return users;
}

const getOneUser = async (where, include=[]) => {
    if (!where) {
        return ApiError.BadRequest('Where parameter must not be null or undefined');
    }
    const user = await UserModel.findOne({ where, include });  

    if (!user && !where.email) {
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
    return user;
}

const updateUser = async (id, userData) => {
    if (!id || !editeData) {
        return ApiError.BadRequest('Id and editeData parameter must not be null or undefined');
    }

    const user = await UserModel.findOne({ where: { id } });
    if (!user) {
        return ApiError.BadRequest('User not found');
    }

    const updatedUser = await user.update(userData);
    return updatedUser;
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